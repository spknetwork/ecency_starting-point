import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProgressBar } from "components/items/ProgressBar";
import { ColorScheme } from "./customize/colorScheme";
import { CommunityCustomize } from "./customize/communityCustomize";
import { LogoCustomize } from "./customize/logoCustomize";
import { CommunityCreate } from "./customize/communityCreate";
import { useRecoilState } from "recoil";
import { stepState } from "state/user/slice";
import { CommunityConfirmation } from "./communityConfirmation";

enum Steps {
  Logo = "Logo",
  Color = "Color scheme",
  Community = "Community info",
  Conrifmation = "Confirmation",
}

interface Props {
  create: boolean;
  onExit: () => void;
}

export const Proccess: React.FC<Props> = ({ create, onExit }) => {
  const [step, setStep] = useRecoilState(stepState);
  const steps = create
    ? [Steps.Community, Steps.Conrifmation, Steps.Logo, Steps.Color]
    : [Steps.Logo, Steps.Color, Steps.Community];
  const router = useRouter();

  const handleBack = () => {
    if (step === 0) {
      setStep(0);
      onExit();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      <ProgressBar onBack={handleBack} currentIndex={step} steps={steps} />
      <Box>
        {steps[step] === Steps.Logo && (
          <LogoCustomize onNext={() => setStep(step + 1)} />
        )}
        {steps[step] === Steps.Color && (
          <ColorScheme
            onNext={() =>
              create ? router.push("/summary") : setStep(step + 1)
            }
          />
        )}
        {steps[step] === Steps.Community && !create && (
          <CommunityCustomize onNext={() => router.push("/summary")} />
        )}
        {steps[step] === Steps.Community && create && (
          <CommunityCreate onNext={() => setStep(step + 1)} />
        )}
        {steps[step] === Steps.Conrifmation && (
          <CommunityConfirmation onNext={() => setStep(step + 1)} />
        )}
      </Box>
    </>
  );
};
