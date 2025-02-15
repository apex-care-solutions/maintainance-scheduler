"use client";
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from "@/presenter/components/ui/card";
import { Button } from "@/presenter/components/ui/button";

export function AppearanceCard() {
    const [theme, setTheme] = useState("light");

    return (
        <Card className="w-full bg-neutral-100 h-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                    Appearance Settings
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Theme</label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    <p className="text-gray-500 text-sm mt-1">
                        Choose your preferred theme for the application.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    size="default"
                    className="w-full bg-black text-white hover:text-primary-foreground hover:bg-muted-foreground mt-5"
                >
                    Confirm
                </Button>
            </CardFooter>
        </Card>
    );
}
