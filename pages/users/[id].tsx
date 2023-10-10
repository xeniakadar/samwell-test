import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
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

export default function UserActivityPage({
  userSignup,
  logins,
  upgrades,
}: UserActivityProps) {
  return (
    <Container>
      <Main>
        <Title>{userSignup.name}</Title>
        <p>Email: {userSignup.email}</p>
        <p>Signup Date: {userSignup.signupDate}</p>

        <h2>Login Activities</h2>
        <ul>
          {logins.length ? (
            logins.map((login) => (
              <li key={login.userId}>
                {login.date} - {login.device}
              </li>
            ))
          ) : (
            <h3>No logins yet</h3>
          )}
        </ul>

        <h2>Subscription Upgrades</h2>
        <ul>
          {upgrades.length ? (
            upgrades.map((upgrade) => (
              <li key={upgrade.userId}>
                {upgrade.oldPlan} to {upgrade.newPlan} on {upgrade.upgradeDate}
              </li>
            ))
          ) : (
            <h3>No upgrades yet</h3>
          )}
        </ul>
      </Main>
      <Description>
        <Link href="/">&larr; Go Back</Link>
      </Description>
    </Container>
  );
}
