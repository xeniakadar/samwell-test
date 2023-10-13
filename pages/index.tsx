import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Summary,
  StyledTable,
  DashCard,
  DashCardContainer,
} from "../components/sharedstyles";
import Link from "next/link";
import Cards from "../components/cards";
import { Signup, Login, Upgrade } from "../types/api";
import { FaStar, FaUser, FaArrowUp } from "react-icons/fa";

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
    signups = await fetchAndHandleError("http://localhost:3000/api/signups");
    logins = await fetchAndHandleError("http://localhost:3000/api/logins");
    upgrades = await fetchAndHandleError("http://localhost:3000/api/upgrades");

    signups.sort((a, b) => b.signupDate.localeCompare(a.signupDate));
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }

  return { props: { signups, logins, upgrades } };
}

export default function Home({ signups, logins, upgrades }: HomeProps) {
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
            {signups.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.signupDate}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Main>
    </Container>
  );
}
