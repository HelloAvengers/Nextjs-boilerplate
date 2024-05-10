"use client";

import { LoaderIcon } from "lucide-react";

import { useDictionary } from "@/hooks/use-dictionary";

export const LoadingDialog = () => {
  const { dictionary } = useDictionary();

  return (
    <div className="flex justify-center items-center flex-col p-20">
      <LoaderIcon
        className="animate-spin text-primary"
        width={40}
        height={40}
      />
      <div className="mt-4">{dictionary.common.loading.description} . . .</div>
    </div>
  );
};

export default LoadingDialog;
