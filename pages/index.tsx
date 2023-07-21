import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function Home() {
  // Combine the file URL and access token to create the temporary download link
  const downloadUrl =
    "https://firebasestorage.googleapis.com/v0/b/vdo-call-9932f.appspot.com/o/DiskMGContextMenuInstaller.exe?alt=media&token=4ad79d79-d074-41d6-b055-732fd5ee565c";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Team Hack Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Team Hack Squad</h1>
        <h1 className={styles.subTitle}>
          Disk MG:
          <a href={downloadUrl} download style={{ marginLeft: "4vw" }}>
            <CloudDownloadIcon sx={{ fontSize: "1.8em" }} />
          </a>
        </h1>
        <h4>"Disk MG: Optimize, Organize, and Unleash Your Storage!"</h4>
      </main>
    </div>
  );
}
