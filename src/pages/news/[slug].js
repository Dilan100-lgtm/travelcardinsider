// src/pages/news/[slug].js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllNews, getNewsBySlug } from '@/utils/newsUtils';
// Header and Footer are typically part of a layout component in _app.tsx or a custom Layout.js
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import styles from '@/styles/NewsArticlePage.module.css';

export default function NewsArticlePage({ newsItem }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={styles.loading}>Loading article...</div>;
  }

  if (!newsItem) {
    return (
      <>
        <Head>
          <title>Article Not Found - TravelCardInsider</title>
        </Head>
        {/* <Header /> */}
        <main className={styles.articleContainerNotFound}>
          <h1 className={styles.title}>News Article Not Found</h1>
          <p>Sorry, we couldn't find the article you were looking for.</p>
          <Link href="/news" className={styles.backLink}>
            &larr; Back to News
          </Link>
        </main>
        {/* <Footer /> */}
      </>
    );
  }

  const publishedDate = new Date(newsItem.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const updatedDate = newsItem.updatedAt ? new Date(newsItem.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  }) : publishedDate;

  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": newsItem.title,
      "image": newsItem.imageSrc ? [`https://www.travelcardinsider.com${newsItem.imageSrc}`] : [], // Replace with your domain
      "datePublished": newsItem.date,
      "dateModified": newsItem.updatedAt || newsItem.date,
      "author": {
        "@type": "Person",
        "name": newsItem.author || "TravelCardInsider Team",
        "url": newsItem.author === "Dilan Madushanka" ? "https://www.travelcardinsider.com/author/dilan-madushanka" : undefined // Replace domain
      },
      "publisher": {
        "@type": "Organization",
        "name": "TravelCardInsider",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.travelcardinsider.com/6.jpg" // Replace with your logo URL and domain
        }
      },
      "description": newsItem.snippet,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.travelcardinsider.com/news/${newsItem.slug}` // Replace domain
      }
    };
    return JSON.stringify(schema);
  };

  return (
    <>
      <Head>
        <title>{`${newsItem.title} - TravelCardInsider News`}</title>
        <meta name="description" content={newsItem.snippet} />
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.snippet} />
        {newsItem.imageSrc && <meta property="og:image" content={`https://www.travelcardinsider.com${newsItem.imageSrc}`} /> } {/* Replace domain */}
        <meta property="og:url" content={`https://www.travelcardinsider.com/news/${newsItem.slug}`} /> {/* Replace domain */}
        <meta property="og:type" content="article" />
        {newsItem.category && <meta property="article:section" content={newsItem.category} />}
        <meta property="article:published_time" content={newsItem.date} />
        {newsItem.updatedAt && <meta property="article:modified_time" content={newsItem.updatedAt} /> }
        {newsItem.author && newsItem.author === "Dilan Madushanka" && (
            <meta property="article:author" content="https://www.travelcardinsider.com/author/dilan-madushanka" /> /* Replace domain */
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateSchema() }}
        />
        <link rel="canonical" href={`https://www.travelcardinsider.com/news/${newsItem.slug}`} /> {/* Replace domain */}
      </Head>

      <article className={styles.premiumArticle}>
        {newsItem.imageSrc && (
          <div className={styles.heroImageContainer}>
            <Image
              src={newsItem.imageSrc}
              alt={newsItem.imageAlt || newsItem.title}
              layout="fill"
              objectFit="cover"
              priority
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
        )}
        <main className={styles.articleWrapper}>
          <header className={styles.articleHeader}>
            {newsItem.category && <p className={styles.category}>{newsItem.category}</p>}
            <h1 className={styles.title}>{newsItem.title}</h1>
            <div className={styles.metaContainer}>
              <div className={styles.authorInfo}>
                {newsItem.author === "Dilan Madushanka" ? (
                    <Link href="/author/dilan-madushanka" legacyBehavior>
                        <a className={styles.authorName}>{newsItem.author}</a>
                    </Link>
                ) : (
                    <span className={styles.authorName}>{newsItem.author || 'TravelCardInsider Team'}</span>
                )}
              </div>
              <div className={styles.dateInfo}>
                <p className={styles.publishedDate}>Published: {publishedDate}</p>
                {newsItem.updatedAt && newsItem.updatedAt !== newsItem.date && (
                  <p className={styles.updatedDate}>Updated: {updatedDate}</p>
                )}
              </div>
            </div>
          </header>
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
          <div className={styles.articleFooter}>
            <Link href="/news" className={styles.backLink}>
                &larr; Back to All News
            </Link>
          </div>
        </main>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const newsItems = getAllNews();
  const paths = newsItems.map((item) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const newsItem = getNewsBySlug(params.slug);
  if (!newsItem) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      newsItem,
    },
    revalidate: 3600,
  };
}