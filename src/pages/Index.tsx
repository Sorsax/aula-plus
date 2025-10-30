import { SearchBar } from "@/components/SearchBar";
import { AppGrid } from "@/components/AppGrid";
import { InfoLinks } from "@/components/InfoLinks";
import { ProfileCircle } from "@/components/ProfileCircle";
import backgroundImage from "@/assets/background.jpg";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better glass effect visibility */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <ProfileCircle />
        
        <main className="flex-1 flex flex-col items-center justify-start px-4">
          {/* Top gap to position the search bar similarly to the reference */}
          <div className="w-full" style={{ height: '18vh' }} />
          <div className="w-full flex justify-center mb-6">
            <SearchBar />
          </div>
          <div className="w-full flex justify-center mb-14">
            <AppGrid />
          </div>
          <div className="w-full flex justify-center">
            <InfoLinks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
