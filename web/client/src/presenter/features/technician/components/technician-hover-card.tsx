import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";

export function TechnicianHoverCard({
    technician,
}: {
    technician: {
        id: number;
        username: string;
        createdAt: Date;
        title: string;
        description: string;
        averageRating: number;
    };
}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex flex-col justify-center items-center gap-1 select-none">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src={""} alt={""} />
                        <AvatarFallback className="h-10 w-10">W</AvatarFallback>
                    </Avatar>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>
                            {technician.username.toUpperCase()[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                        <div className="flex justify-between">
                            <Link to={`/technician/${technician.id}/profile`}>
                                <h4 className="text-sm font-semibold">
                                    @{technician.username}
                                </h4>
                            </Link>
                            <p className="text-sm">
                                ⭐ {technician.averageRating}
                            </p>
                        </div>
                        <p className="text-sm">{technician.title}</p>
                        <p className="text-sm">{technician.description}</p>
                        <div className="flex items-center pt-2">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                                Joined{" "}
                                {moment(technician.createdAt).format(
                                    "MMMM YYYY",
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
