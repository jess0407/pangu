import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Before the world was opened, the sky and the earth were a chaotic mass,
        like an egg, and Pangu was born among them.
      </div>

      <div className={styles.center}>
        <h1>Hello Pangu 2.0</h1>
        <p>relive a new life in lengendary era.</p>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Open Sky</h2>
          <p>The light and clear Yang Qi ascended to become the sky</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sank earth <span>-&gt;</span>
          </h2>
          <p>The heavy and turbid Yin Qi sank to form the earth.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            The world is born <span>-&gt;</span>
          </h2>
          <p>
            Pangu was between heaven and earth. He changed many times a day and
            was more sacred than heaven and earth. Every day the sky rose ten
            feet higher, the earth became ten feet thicker every day, and Pangu
            grew ten feet taller every day. This continued for another eighteen
            thousand years. The sky rose very high, the earth sank very deep,
            and Pangu grew very tall.
          </p>
        </a>
      </div>
    </main>
  );
}
