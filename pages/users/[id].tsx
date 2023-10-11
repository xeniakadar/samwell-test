import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  InfoCard,
  Avatar,
  StyledTable,
  BoldText,
} from "../../components/sharedstyles";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";

import { Signup, Login, Upgrade } from "../../types/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const paramId = context.params.id;
  const userId = typeof paramId === "string" ? parseInt(paramId, 10) : null;
  if (!userId) {
    return {
      notFound: true,
    };
  }

  const fetchAndHandleError = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  };

  let allSignups: Signup[] = [];
  let allLogins: Login[] = [];
  let allUpgrades: Upgrade[] = [];

  try {
    allSignups = await fetchAndHandleError("http://localhost:3000/api/signups");
    allLogins = await fetchAndHandleError("http://localhost:3000/api/logins");
    allUpgrades = await fetchAndHandleError(
      "http://localhost:3000/api/upgrades"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }

  const userSignup: Signup | undefined = allSignups.find(
    (signup) => signup.id === userId
  );
  const userLogins: Login[] = allLogins.filter(
    (login) => login.userId === userId
  );
  const userUpgrades: Upgrade[] = allUpgrades.filter(
    (upgrade) => upgrade.userId === userId
  );

  if (!userSignup) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userSignup,
      logins: userLogins,
      upgrades: userUpgrades,
    },
  };
}

interface UserActivityProps {
  userSignup: Signup;
  logins: Login[];
  upgrades: Upgrade[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function UserActivityPage({
  userSignup,
  logins,
  upgrades,
}: UserActivityProps) {
  return (
    <Container>
      <Main>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
        <InfoCard>
          <Avatar>{getInitials(userSignup.name)}</Avatar>
          <Title>{userSignup.name}</Title>
          <p>
            <BoldText>Email:</BoldText> {userSignup.email}
          </p>
          <p>
            <BoldText>Signup Date:</BoldText> {userSignup.signupDate}
          </p>
        </InfoCard>

        <InfoCard>
          <h2>Login Activities</h2>
          {logins.length ? (
            <StyledTable>
              <thead>
                <tr>
                  <th>Login Date</th>
                  <th>Device</th>
                </tr>
              </thead>
              <tbody>
                {logins.map((login) => (
                  <tr key={login.userId}>
                    <td>{login.date}</td>
                    <td>{login.device}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          ) : (
            <h3>No logins yet</h3>
          )}
        </InfoCard>

        <InfoCard>
          <h2>Subscription Upgrades</h2>
          {upgrades.length ? (
            upgrades.map((upgrade) => (
              <p key={upgrade.userId}>
                {upgrade.oldPlan} to {upgrade.newPlan} on {upgrade.upgradeDate}
              </p>
            ))
          ) : (
            <h3>No upgrades yet</h3>
          )}
        </InfoCard>
      </Main>
    </Container>
  );
}
