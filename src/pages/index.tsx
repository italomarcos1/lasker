import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#1c1c1c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#fbfdfd" }}>It's working</h1>
      <h3 style={{ color: "#ddd" }}>Thank you.</h3>
    </div>
  );
}
