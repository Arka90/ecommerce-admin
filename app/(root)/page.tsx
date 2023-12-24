import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-8">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
