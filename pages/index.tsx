import Head from "next/head";
import {
  Container,
  Main,
  Title,
  StyledTable,
  DashCard,
  DashCardContainer,
  InfoCard,
} from "../components/sharedstyles";
import { Button, ButtonsContainer } from "../components/Button";
import Link from "next/link";
import { Signup, Login, Upgrade } from "../types/api";
import { FaStar, FaUser, FaArrowUp } from "react-icons/fa";
import UserChart from "../components/UserChart";
import { useState } from "react";

const BASE_URL = process.env.LOCAL_HOST || "http://localhost:3000";

interface HomeProps {
  signups: Signup[];
  logins: Login[];
  upgrades: Upgrade[];
}

export async function getServerSideProps() {
  const fetchAndHandleError = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  };

  let signups: Signup[] = [];
  let logins: Login[] = [];
  let upgrades: Upgrade[] = [];

  try {
    signups = await fetchAndHandleError(`${BASE_URL}/api/signups`);
    logins = await fetchAndHandleError(`${BASE_URL}/api/logins`);
    upgrades = await fetchAndHandleError(`${BASE_URL}/api/upgrades`);

    signups.sort((a, b) => b.signupDate.localeCompare(a.signupDate));
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }

  return { props: { signups, logins, upgrades } };
}

const getFilteredData = (
  data: { [key: string]: number },
  range: "week" | "month"
) => {
  const endDate = new Date();
  let startDate = new Date();

  if (range === "week") {
    startDate.setDate(endDate.getDate() - 7);
  } else if (range === "month") {
    startDate.setMonth(endDate.getMonth() - 1);
  }

  const filteredData: { [key: string]: number } = {};
  Object.keys(data).forEach((date) => {
    const currentDate = new Date(date);
    if (currentDate >= startDate && currentDate <= endDate) {
      filteredData[date] = data[date];
    }
  });

  return filteredData;
};

export default function Home({ signups, logins, upgrades }: HomeProps) {
  // chart week or month
  const [selectedRange, setSelectedRange] = useState<"week" | "month">("week");
  // show more table
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  // sorting dates
  const sortedSignupsForChart = [...signups].sort((a, b) =>
    a.signupDate.localeCompare(b.signupDate)
  );

  const displayedSignups = isTableExpanded ? signups : signups.slice(0, 5);

  // aggregate signups
  const aggregatedSignups = sortedSignupsForChart.reduce((acc, signup) => {
    const date = signup.signupDate;
    if (acc[date]) {
      acc[date]++;
    } else {
      acc[date] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  const getDatesBetween = (startDate: string, endDate: string): string[] => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dates = [];

    while (start <= end) {
      dates.push(start.toISOString().split("T")[0]);
      start.setDate(start.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesBetween(
    sortedSignupsForChart[0].signupDate,
    sortedSignupsForChart[sortedSignupsForChart.length - 1].signupDate
  );

  const completeData = allDates.reduce((acc, date) => {
    acc[date] = aggregatedSignups[date] || 0;
    return acc;
  }, {} as { [key: string]: number });

  const displayedData = getFilteredData(completeData, selectedRange);

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Welcome to the{" "}
          <a href="https://github.com/samwellai/nextjs-test#nextjs-test">
            Samwell AI Test!
          </a>
        </Title>
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
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {displayedSignups.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.signupDate}</td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={2}
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => setIsTableExpanded(!isTableExpanded)}
              >
                {isTableExpanded ? "Show Less" : "Show More"}
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Main>
    </Container>
  );
}
