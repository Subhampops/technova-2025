"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  registrationLink: string;
  eventTitle: string;
}

export const RegistrationDialog = ({
  isOpen,
  onClose,
  registrationLink,
  eventTitle,
}: RegistrationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-4/5">
        <DialogHeader>
          <DialogTitle>Register for {eventTitle}</DialogTitle>
        </DialogHeader>
        <div className="h-full w-full">
          <iframe
            src={registrationLink}
            className="h-full w-full"
            title={`Registration for ${eventTitle}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
