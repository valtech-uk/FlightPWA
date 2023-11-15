This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Passage useful links
(passwordless authentication library)

**[Passage](https://passage.1password.com/)** - Passage main page

**[React guide](https://passage.1password.com/post/building-a-react-app-with-biometric-authentication)** - Small short instruction how to make authn on react

**[Passage console page](https://console.passage.id/)** - Here we can change authentication origin (prod/dev), app name and manage a lot of other things

**Note:** for future it would be useful to have 2 instances of app in passage console.
One for dev, and one for prod. Dev would be with authentication origin as https://localhost:3000, and prod - 
with https://flight-pwa.vercel.app/ (as it is now) and other different settings. And to manage this instance through the .env.NEXT_PUBLIC_PASSAGE_APP_ID (now the app_id is hardcoded in index file, passageAuth.appId)
