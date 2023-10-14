import {
  DashCard,
  DashCardContainer,
  InfoCard,
} from "../components/sharedstyles";
import { Button, ButtonsContainer } from "../components/Button";
import { Signup, Login, Upgrade } from "../types/api";
import { FaStar, FaUser, FaArrowUp } from "react-icons/fa";
import UserChart from "../components/UserChart";

interface DashboardSummaryProps {
  signups: Signup[];
  logins: Login[];
  upgrades: Upgrade[];
  displayedData: { [key: string]: number };
  selectedRange: "week" | "month";
  setSelectedRange: React.Dispatch<React.SetStateAction<"week" | "month">>;
}

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  signups,
  logins,
  upgrades,
  displayedData,
  selectedRange,
  setSelectedRange,
}) => (
  <>
    <InfoCard>
      <UserChart data={displayedData} />
      <ButtonsContainer>
        <Button
          isActive={selectedRange === "week"}
          onClick={() => setSelectedRange("week")}
        >
          Last Week
        </Button>

        <Button
          isActive={selectedRange === "month"}
          onClick={() => setSelectedRange("month")}
        >
          Last Month
        </Button>
      </ButtonsContainer>
    </InfoCard>
    <DashCardContainer>
      <DashCard>
        <div>
          <h3>{signups.length}</h3>
          <p>New Signups</p>
        </div>
        <FaUser />
      </DashCard>
      <DashCard>
        <div>
          <h3>{logins.length}</h3>
          <p>Logins</p>
        </div>
        <FaArrowUp />
      </DashCard>
      <DashCard>
        <div>
          <h3>{upgrades.length}</h3>
          <p>Upgrades</p>
        </div>
        <FaStar />
      </DashCard>
    </DashCardContainer>
  </>
);
