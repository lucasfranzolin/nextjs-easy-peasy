import { useRouter } from "next/router"

function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">
        Install Redux Dev Tools
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/")
          }}
        >
          <u>Navigate to index</u>
        </div>
        <div
          style={{ cursor: "pointer", marginLeft: 12 }}
          onClick={() => {
            router.push("/home")
          }}
        >
          <u>Navigate to home</u>
        </div>
      </div>
      {children}
    </>
  )
}

export default Layout
