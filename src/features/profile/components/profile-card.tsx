"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { authClient } from "@/lib/auth-client";

interface ProfileCardProps {
  session: {
    user: { name: string; email: string; image?: string | null };
  };
}

export function ProfileCard({ session: { user } }: ProfileCardProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
    setIsLoggingOut(false);
  };

  return (
    <Item variant="muted" className="w-full max-w-md border-border border-2">
      <ItemMedia variant="image">
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name}
            height={40}
            width={40}
            priority
          />
        ) : (
          <div className="flex size-full items-center justify-center text-lg">
            {user.name.charAt(0)}
          </div>
        )}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{user.name}</ItemTitle>
        <ItemDescription>{user.email}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          type="button"
          variant="destructive"
          onClick={handleSignOut}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Signing out..." : "Sign Out"}
        </Button>
      </ItemActions>
    </Item>
  );
}
