import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function Home() {
  // Combine the file URL and access token to create the temporary download link
  const downloadUrl =
    "https://firebasestorage.googleapis.com/v0/b/vdo-call-9932f.appspot.com/o/Disk_MG.exe?alt=media&token=76d4ae72-b7f2-4bb6-9b25-754ae655cd59";

  return (
    <div className={styles.container}>
      <Head>
        <title>Hack Squad</title>
        <meta name="description" content="Team Hack Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Team Hack Squad</h1>
        <h1 className={styles.subTitle}>
          Disk MG (ver 1.0.0):
          <a
            href={downloadUrl}
            download="DiskMGContextMenuInstaller.exe"
            style={{ marginLeft: "4vw" }}
          >
            <CloudDownloadIcon sx={{ fontSize: "1.8em" }} />
          </a>
        </h1>
        <h4>
          &quot;Disk MG: Optimize, Organize, and Unleash Your Storage!&quot;
        </h4>
      </main>
    </div>
  );
}
