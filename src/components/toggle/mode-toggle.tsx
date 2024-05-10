"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, SlidersHorizontal, Sun } from "lucide-react";

import { useDictionary } from "@/hooks/use-dictionary";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  const { dictionary } = useDictionary();
  const themeDictionary = dictionary.common.theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{themeDictionary.drop_menu.title}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="flex items-center space-x-2">
            <Sun width={18} />
            <span>{themeDictionary.drop_menu.items.light}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="flex items-center space-x-2">
            <Moon width={18} />
            <span>{themeDictionary.drop_menu.items.dark}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="flex items-center space-x-2">
            <SlidersHorizontal width={18} />
            <span> {themeDictionary.drop_menu.items.system}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
