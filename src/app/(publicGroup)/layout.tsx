import { Footer } from "@/components/home/footer"
import { Navbar } from "@/components/home/navbar"

const PublicGroupLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* 
        pt-[104px] matches the height of TopBar (40px) + MainNav (64px).
        Adjust md:pt-[112px] if your MainNav is taller on desktop.
      */}
      <main className="flex-1 pt-[104px] md:pt-[112px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PublicGroupLayout