import Link from "next/link";
import Nav from "@/components/Nav"
import { Button } from "./ui/button";
import MobileNav from "./MobileNav"


const Header = () => {
    return (
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                      SaiSunnyT<span className="text-accent">.</span>  
                    </h1>
                </Link>

                {/*desktop nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/*mobile nav & hire me button*/}
                <div className="xl:hidden">
                   <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header;