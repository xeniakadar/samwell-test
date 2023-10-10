import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
} from "../../components/sharedstyles";
import Link from "next/link";
import Cards from "../../components/cards";

export async function getServerSideProps(context) {
  const userId = parseInt(context.params.id, 10);

  // Fetch all data
  const signupsRes = await fetch("http://localhost:3000/api/signups");
  const allSignups = await signupsRes.json();

  const loginsRes = await fetch("http://localhost:3000/api/logins");
  const allLogins = await loginsRes.json();

  const upgradesRes = await fetch("http://localhost:3000/api/upgrades");
  const allUpgrades = await upgradesRes.json();

  // Filter the data for the particular user
  const userSignup = allSignups.find((signup) => signup.id === userId);
  const userLogins = allLogins.filter((login) => login.userId === userId);
  const userUpgrades = allUpgrades.filter(
    (upgrade) => upgrade.userId === userId
  );

  // Check if user exists, otherwise redirect to 404 page
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

export default function UserActivityPage({ userSignup, logins, upgrades }) {
  return (
    <Container>
      <Main>
        <Title>{userSignup.name}</Title>
        <p>Email: {userSignup.email}</p>
        <p>Signup Date: {userSignup.signupDate}</p>

        <h2>Login Activities</h2>
        <ul>
          {logins.length ? (
            logins.map((login, index) => (
              <li key={index}>
                {login.date} - {login.device}
              </li>
            ))
          ) : (
            <h3>No logins yet</h3>
          )}
        </ul>

        <h2>Subscription Upgrades</h2>
        <ul>
          {upgrades.map((upgrade, index) => (
            <li key={index}>
              {upgrade.oldPlan} to {upgrade.newPlan} on {upgrade.upgradeDate}
            </li>
          ))}
        </ul>
      </Main>
      <Description>
        <Link href="/">&larr; Go Back</Link>
      </Description>
    </Container>
  );
}
