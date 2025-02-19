import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
    return (
        <main>
            <Button>
                Enviar
                <ArrowRight/>
            </Button>

            <IconButton>
                <Copy />
            </IconButton>
        </main>
    );
}
