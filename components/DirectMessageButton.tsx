"use client";

import useMembershipTier from "@/hooks/useMembershipTier";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { MessageCircleIcon, LockIcon } from "lucide-react";
import { getTierFromLevel } from "@/types/types";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { usePathname } from "next/navigation";

function DirectMessageButton() {
  const { user } = useUser();
  const membershipTier = useMembershipTier();
  const pathname = usePathname();

  if (pathname.includes("/message")) return null;

  if (!user) return null;

  const tier = membershipTier ? getTierFromLevel(membershipTier) : null;

  if (tier === 'elevateElite') {
    // VIPs can DM the creator
    return (
      <Button
        className="flex items-center gap-2 transition-all hover:bg-primary/90"
        asChild
      >
        <Link href="/message">
          <MessageCircleIcon className="w-4 h-4" />
          <span>Send Message to Creator</span>
        </Link>
      </Button>
    );
  }

  return (
    // Non-ElevateElite users see locked button with upgrade tooltip
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex bg-gray-100 px-4 py-2 rounded-md items-center gap-2 border-dashed cursor-not-allowed opacity-70">
            <LockIcon className="w-4 h-4" />
            <span>Send Message to Creator</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="p-4">
          <p className="text-sm mb-2">Upgrade to VIP to message the creator</p>
          <Button
            size="sm"
            className="w-full text-xs"
            variant="secondary"
            asChild
          >
            <Link href="/pricing">Upgrade Now</Link>
          </Button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default DirectMessageButton;