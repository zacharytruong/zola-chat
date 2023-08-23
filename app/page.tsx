import User from "./components/User"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Homepage</h1>
      <User />
      <div>
        <a href="/api/auth/login">
          <button>Login</button>
        </a>
      </div>
      <div>
        <a href="/api/auth/logout">
          <button>Logout</button>
        </a>
      </div>
    </main>
  );
}
