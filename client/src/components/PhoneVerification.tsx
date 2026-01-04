import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { OTPService } from "@/services/OTPService";

interface PhoneVerificationProps {
  onVerificationComplete: (phone: string) => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  onVerificationComplete,
}) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phone) {
      toast({
        title: "Error",
        description: "Please enter a phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const response = await OTPService.sendOTP(phone, countryCode);
    setIsLoading(false);

    if (response.success) {
      setIsOtpSent(true);
      toast({
        title: "OTP Sent",
        description: response.message,
      });
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      toast({
        title: "Error",
        description: "Please enter the OTP",
        variant: "destructive",
      });
      return;
    }
    if (otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const response = await OTPService.verifyOTP(otp);
    setIsLoading(false);

    if (response.success) {
      setIsVerified(true);
      toast({
        title: "Success",
        description: response.message,
      });
      onVerificationComplete(`${countryCode}${phone}`);
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    const response = await OTPService.resendOTP(phone, countryCode);
    setIsLoading(false);

    if (response.success) {
      toast({
        title: "OTP Resent",
        description: response.message,
      });
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
  };

  if (isVerified) {
    return (
      <div className="text-center p-4 bg-gray-800 dark:bg-gray-800 rounded-lg">
        <div className="text-green-400 text-lg font-semibold mb-2">
          ✓ Phone Verified
        </div>
        <p className="text-gray-300">
          {countryCode}
          {phone}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {/* PHONE + COUNTRY CODE */}
      <div>
        <Label htmlFor="phone" className="block text-left">
          Phone Number*
        </Label>

        <div className="flex flex-col sm:flex-row sm:space-x-2 mt-1 space-y-2 sm:space-y-0">

          {/* Country code */}
          <div className="w-full sm:w-1/4">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger
                id="country-code"
                className="text-base py-2 bg-gray-800 border-gray-700 text-white"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="+91" className="text-white hover:bg-gray-700">
                  +91
                </SelectItem>
                <SelectItem value="+1" className="text-white hover:bg-gray-700">
                  +1
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phone Number */}
          <div className="w-full sm:w-1/2">
            <Input
              type="tel"
              id="phone"
              placeholder="Enter Phone"
              className="text-base py-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              maxLength={10}
              disabled={isOtpSent}
            />
          </div>

          {/* Send OTP Button */}
          <div className="w-full sm:w-1/4">
            <Button
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-lg"
              onClick={handleSendOTP}
              disabled={isLoading || isOtpSent}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </Button>
          </div>

        </div>
      </div>

      {/* OTP Section */}
      {isOtpSent && (
        <div className="flex flex-col sm:flex-row mt-2 space-y-2 sm:space-y-0 sm:space-x-2">

          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            className="text-base py-2 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />

          <Button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg w-full sm:w-auto"
            onClick={handleVerifyOTP}
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>

          <Button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 rounded-lg w-full sm:w-auto"
            onClick={handleResendOTP}
            disabled={isLoading}
          >
            Resend OTP
          </Button>
        </div>
      )}

      {/* Firebase reCAPTCHA container */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneVerification;
