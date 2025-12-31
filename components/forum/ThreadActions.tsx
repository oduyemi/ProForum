"use client";

import { MoreVertical, Trash, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  canEdit: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export const ThreadActions = ({ canEdit, onEdit, onDelete }: Props) => {
  if (!canEdit) return null;

  return (
    <div className="flex gap-2">
      <Button size="sm" variant="ghost" onClick={onEdit}>
        <Edit size={14} />
      </Button>

      <Button
        size="sm"
        variant="ghost"
        onClick={onDelete}
        className="text-red-400 hover:text-red-500"
      >
        <Trash size={14} />
      </Button>
    </div>
  );
};
