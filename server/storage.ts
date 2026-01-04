import {
  type User,
  type InsertUser,
  type TeamMember,
  type InsertTeamMember,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMembersByType(type: string): Promise<TeamMember[]>;
}

export class MemStorage implements IStorage {
  private users = new Map<number, User>();
  private teamMembers = new Map<number, TeamMember>();
  private currentId = 1;

  constructor() {
    this.seedTeam();
  }

  private seedTeam() {
    const leaders: InsertTeamMember[] = [
      {
        name: "Akshit Giri",
        position: "CEO & Founder of Qualibytes",
        bio: "Founder and visionary leader of Qualibytes.",
        imageUrl: "/akshit.jpg", //  image exists
        type: "leadership",
      },
      {
        name: "Deepanshu Giri",
        position: "Co-Founder & COO of Qualibytes",
        bio: "Co-founder supporting strategy and growth.",
        imageUrl: null, //  NO IMAGE
        type: "leadership",
      },
      {
        name: "Aditi",
        position: "Operations Head",
        bio: "Leads operations and execution.",
        imageUrl: "/aditi.png",
        type: "leadership",
      },
    ];

    leaders.forEach((m) => {
      const id = this.currentId++;
      this.teamMembers.set(id, {
        ...m,
        id,
        imageUrl: m.imageUrl ?? null,
      });
    });
  }

  async getUser(id: number) {
    return this.users.get(id);
  }

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(
      (u) => u.username === username
    );
  }

  async createUser(user: InsertUser) {
    const id = this.currentId++;
    const newUser = { ...user, id };
    this.users.set(id, newUser);
    return newUser;
  }

  async getAllTeamMembers() {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMembersByType(type: string) {
    return Array.from(this.teamMembers.values()).filter(
      (m) => m.type === type
    );
  }
}

export const storage = new MemStorage();
