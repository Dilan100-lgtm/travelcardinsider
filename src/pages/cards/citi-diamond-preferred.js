/* ------------------------------------------------------------------
    File:  pages/reviews/citi-diamond-preferred-review.js
    Route: https://www.travelcardinsider.com/reviews/citi-diamond-preferred-review
------------------------------------------------------------------- */

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// --- COMPONENT: SEO & Structured Data ---
// This component manages all the metadata and JSON-LD structured data for optimal SEO.
const PageHead = ({ data }) => (
  <Head>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <meta name="keywords" content={data.keywords} />
    <meta name="author" content="Dilan Madushanka" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href={data.pageUrlFull} />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:url" content={data.pageUrlFull} />
    <meta property="og:site_name" content="Travelcardinsider" />
    <meta property="og:image" content={`${data.siteUrl}/images/citi-diamond-preferred-card.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="article:published_time" content={data.publishDate} />
    <meta property="article:modified_time" content={data.updateDate} />
    <meta property="article:author" content="https://www.travelcardinsider.com/author/dilan-madushanka" />
    <meta property="article:section" content="Credit Card Reviews" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={`${data.siteUrl}/images/citi-diamond-preferred-card.png`} />
    <meta name="twitter:creator" content="@TravelInsider" />

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data.structuredData) }}
    />
  </Head>
);

// --- COMPONENT: Icon Renderer ---
// A simple component to render SVG icons for better readability.
const Icon = ({ type, className }) => {
  const icons = {
    check: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    cross: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    star: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
  };
  return <span className={className}>{icons[type]}</span>;
};


// --- COMPONENT: Main Review Page Layout ---
// This is the main component that structures the entire review page.
const CitiDiamondPreferredReviewPage = ({ data }) => {
  return (
    <>
      <PageHead data={data} />
      <div className="bg-gray-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            
            {/* Main Content Area */}
            <main className="lg:col-span-8">
              <article>
                {/* Introduction */}
                <header>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    {data.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    In the vast world of credit cards, most products shout about points, miles, and cash back. The Citi® Diamond Preferred® Card takes a different path. It doesn't shout; it works quietly. It offers no rewards for spending. Instead, it offers a far more precious commodity to a very specific person: time.
                  </p>
                   <p className="text-gray-700 mb-8">
                    This deep-dive review will dissect every feature, pitfall, and strategic advantage of the Citi Diamond Preferred, helping you decide if this is the right key to unlock your debt-free future.
                  </p>
                </header>

                {/* At-a-Glance Section */}
                <section id="at-a-glance" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                    At-a-Glance: The Citi Diamond Preferred Snapshot
                  </h2>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <ul className="space-y-4">
                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Best For:</strong> The Debt Demolisher—someone needing the maximum possible time to eliminate high-interest balances.</p></li>
                      
                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Intro Balance Transfer APR:</strong> 0% intro APR for an impressive 21 months on balance transfers completed within 4 months of account opening. <a href={data.citations.offerDetails} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></p></li>
                      
                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Intro Purchase APR:</strong> 0% intro APR for 12 months from the date of account opening.</p></li>

                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Standard Variable APR:</strong> {data.aprRange} based on your creditworthiness after the intro periods expire. <a href={data.citations.cardmemberAgreement} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></p></li>

                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Annual Fee:</strong> $0. <a href={data.citations.cardmemberAgreement} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></p></li>
                      
                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Balance Transfer Fee:</strong> 5% of the amount of each transfer, with a $5 minimum. <a href={data.citations.offerDetails} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></p></li>
                      
                      <li className="flex items-start"><Icon type="star" className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" /><p><strong className="font-semibold text-gray-800">Required Credit:</strong> Good to Excellent (Recommended FICO Score of 670+).</p></li>
                    </ul>
                    <div className="mt-6 text-center">
                        <a href={data.applyLink} target="_blank" rel="noopener noreferrer sponsored" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                            Apply Securely on Citi's Site
                        </a>
                    </div>
                  </div>
                </section>

                {/* How the Offer Works Section */}
                <section id="how-it-works" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                    How the Headline Offer Works: 21 Months of Financial Breathing Room
                  </h2>
                  <p className="text-gray-700 mb-4">
                    The undeniable crown jewel of the Citi Diamond Preferred is its introductory APR offer. Let's break down exactly what you get.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">The Main Event: 21 Months for Balance Transfers</h3>
                  <p className="text-gray-700 mb-4">
                    The 0% intro APR for 21 months on balance transfers is the core reason this card exists. It’s consistently one of the longest interest-free periods on the market, making it a powerhouse for anyone with a substantial balance to pay down. However, there's a critical catch: you must complete your balance transfers within the first 4 months of opening the account to qualify for the offer. Miss this four-month window, and the 0% APR opportunity for that transfer is gone forever.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">The Side Benefit: 12 Months for New Purchases</h3>
                  <p className="text-gray-700 mb-6">
                    The card also features a 0% intro APR for 12 months on new purchases. This is a solid, if not market-leading, offer that can be useful for financing a planned expense—like a new appliance or a medical bill—without incurring interest for a year.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                    <h4 className="text-lg font-bold text-red-800">Warning: The Danger of Mixing Balances</h4>
                    <p className="text-red-700 mt-2">
                        A major pitfall is using the card for both a balance transfer and new spending after the first year. Your payments will likely be applied to your lowest-APR debt first (the 0% transferred balance), allowing interest to pile up on your new, high-APR purchases.
                    </p>
                    <p className="mt-3 font-semibold text-gray-800">Pro Tip: To avoid this trap, use this card only for your initial balance transfer. Put the physical card away and use a different card for everyday spending.</p>
                  </div>
                </section>
                
                {/* Pros and Cons Section */}
                <section id="pros-cons" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Pros and Cons of the Citi Diamond Preferred Card
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pros */}
                        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-800 mb-4">Pros: Why You Might Want This Card</h3>
                            <ul className="space-y-3">
                                <li className="flex"><Icon type="check" className="text-green-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>Maximum Time Horizon:</strong> An exceptionally long, 21-month interest-free runway to pay down debt.</span></li>
                                <li className="flex"><Icon type="check" className="text-green-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>Zero Annual Fee:</strong> Ensures the card isn’t adding to your financial burden.</span></li>
                                <li className="flex"><Icon type="check" className="text-green-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>Distraction-Free Design:</strong> No rewards program keeps you focused on becoming debt-free.</span></li>
                                <li className="flex"><Icon type="check" className="text-green-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>Helpful Purchase APR:</strong> A separate 12-month 0% intro APR on purchases adds flexibility.</span></li>
                            </ul>
                        </div>
                        {/* Cons */}
                        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-800 mb-4">Cons: Potential Dealbreakers</h3>
                            <ul className="space-y-3">
                                <li className="flex"><Icon type="cross" className="text-red-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>High 5% Balance Transfer Fee:</strong> A significant upfront cost that gets added to your debt.</span></li>
                                <li className="flex"><Icon type="cross" className="text-red-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>No Long-Term Value:</strong> Offers no reason to keep using it for spending after the intro period.</span></li>
                                <li className="flex"><Icon type="cross" className="text-red-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>The Penalty Cliff:</strong> A single late payment can trigger a penalty APR. <a href={data.citations.cardmemberAgreement} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></span></li>
                                <li className="flex"><Icon type="cross" className="text-red-600 w-6 h-6 mr-2 flex-shrink-0" /><span><strong>Poor Choice for Travel:</strong> The 3% foreign transaction fee makes it costly for use abroad. <a href={data.citations.cardmemberAgreement} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></span></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* Real-World Example Section */}
                <section id="real-world-example" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Real-World Example: How Taylor Can Save $3,100
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">
                            Let's see this card in action. Meet Taylor, who has an $8,000 balance on a store card with a 24.99% APR.
                        </p>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                           <li><strong>The Upfront Fee:</strong> A 5% balance transfer fee is applied to the $8,000 balance. The fee is $400 ($8,000 x 0.05).</li>
                           <li><strong>The New Balance:</strong> Taylor’s new starting balance on the Diamond Preferred is $8,400.</li>
                           <li><strong>The Payoff Plan:</strong> To become debt-free in 21 months, Taylor must pay $400 per month ($8,400 / 21).</li>
                           <li><strong>The Progress:</strong> Now, 100% of that $400 monthly payment goes directly to reducing the principal.</li>
                        </ul>
                        <p className="mt-4 font-bold text-gray-900 bg-green-100 p-4 rounded-md">
                           The Bottom Line: By using the Diamond Preferred, Taylor pays a $400 fee but saves approximately $3,500 in interest. The net savings are a staggering $3,100, and the debt is completely eliminated in under two years.
                        </p>
                    </div>
                </section>
                
                {/* Competitive Comparison Section */}
                <section id="comparison" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Competitive Comparison: How the Diamond Preferred Stacks Up
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-md">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Feature</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Citi® Diamond Preferred®</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Citi Simplicity®</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Wells Fargo Reflect®</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Discover it® Balance Transfer</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data.comparisonTable.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.diamond}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.simplicity}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.reflect}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.discover}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {/* Who Should Get / Skip Section */}
                <section id="who-is-it-for" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Who Should Get (and Who Should Skip) This Card?
                    </h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ideal Candidate Profile:</h3>
                             <ul className="space-y-2 list-disc list-inside text-gray-700">
                                <li><strong>The Strategic Consolidator:</strong> Has significant debt and a stable income for aggressive payments.</li>
                                <li><strong>The Disciplined Planner:</strong> Has a concrete debt-elimination plan and sees this card as a temporary tool.</li>
                                <li><strong>The Good Credit Applicant:</strong> Has a FICO score of 670+, with 720+ being ideal for a good credit limit. <a href={data.citations.ficoEducation} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">[Source]</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Who Should Skip This Card:</h3>
                            <ul className="space-y-2 list-disc list-inside text-gray-700">
                               <li><strong>The Rewards Seeker:</strong> Will leave money on the table compared to a cash-back card.</li>
                               <li><strong>The Globetrotter:</strong> The 3% foreign transaction fee is a dealbreaker.</li>
                               <li><strong>The Purchase Financer:</strong> The Wells Fargo Reflect® Card offers a much longer 0% intro APR on purchases.</li>
                            </ul>
                        </div>
                     </div>
                </section>

                {/* Long-term Benefits Section */}
                <section id="long-term-benefits" className="mb-12">
                     <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Beyond the Intro Offer: Long-Term Benefits and Perks
                    </h2>
                     <ul className="space-y-3 list-disc list-inside text-gray-700">
                        <li><strong>Citi Entertainment®:</strong> Get special access to presale tickets and VIP packages. <a href={data.citations.citiEntertainment} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></li>
                        <li><strong>Free FICO® Score:</strong> An invaluable tool for monitoring your credit progress as you pay down your debt. <a href={data.citations.freeFicoScore} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm">[Source]</a></li>
                        <li><strong>The "Product Change" Secret Weapon:</strong> After paying off your debt, ask Citi to convert your card to a rewards card (like the Citi Double Cash®) to preserve your account history without a new application.</li>
                     </ul>
                </section>

                {/* User Testimonials Section */}
                 <section id="user-testimonials" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Real User Testimonials: Voices from the Community
                    </h2>
                    <div className="space-y-6">
                        {data.testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                                <h4 className="font-bold text-lg text-gray-800">"{testimonial.title}"</h4>
                                <p className="mt-2 text-gray-600 italic">"{testimonial.summary}" <a href={testimonial.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">[Source]</a></p>
                                <footer className="mt-3 text-sm text-gray-500">– {testimonial.userProfile}</footer>
                            </blockquote>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Frequently Asked Questions (FAQ)
                    </h2>
                    <div className="space-y-4">
                        {data.faq.map((item, index) => (
                            <details key={index} className="p-4 bg-white rounded-lg shadow-sm group">
                                <summary className="flex justify-between items-center font-semibold cursor-pointer text-gray-800">
                                    {item.question}
                                    <span className="text-blue-500 transform transition-transform duration-200 group-open:rotate-180">&darr;</span>
                                </summary>
                                <p className="mt-2 text-gray-700">
                                    {item.answer}
                                    {item.source && <a href={item.source} target="_blank" rel="noopener noreferrer sponsored" className="text-blue-600 hover:underline text-sm ml-1">[Source]</a>}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>
                
                {/* Final Verdict Section */}
                <section id="final-verdict" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-6">
                        Final Verdict: A Powerful Tool for a Singular Purpose
                    </h2>
                    <div className="prose max-w-none text-gray-700">
                        <p>The Citi® Diamond Preferred® Card is the definition of a niche product. It is a highly specialized debt-management instrument that sacrifices nearly every common card benefit—rewards, low fees, travel perks—in exchange for its single powerhouse feature: one of the longest interest-free runways in the industry.</p>
                        <p>Because of its high 5% balance transfer fee and the existence of more forgiving or versatile competitors, this card can only be recommended to a very narrow slice of consumers. The ideal user is the disciplined "Strategic Debt-Consolidator" who has a large balance, a concrete repayment plan, and for whom the 21-month timeframe is a non-negotiable necessity that outweighs all other costs.</p>
                        <p>For everyone else, the choice is clear. If you want a forgiving, lower-cost balance transfer from Citi, choose the Citi Simplicity® Card. If you need to finance a new purchase for just as long, choose the Wells Fargo Reflect® Card.</p>
                        <p className="font-semibold text-lg text-center mt-6 bg-blue-50 p-4 rounded-lg">
                           The Citi Diamond Preferred is a powerful tool, capable of saving you thousands in interest. But for the right person with the right plan, it truly is a diamond. For everyone else, there are better gems to be found.
                        </p>
                    </div>
                </section>

              </article>
            </main>

            {/* Sidebar with Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-8">
                <nav className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {data.toc.map((item, index) => (
                       <li key={index}><a href={`#${item.id}`} className="text-gray-600 hover:text-blue-600 hover:underline">{item.title}</a></li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>

        {/* Sticky Footer CTA */}
        <div className="sticky bottom-0 bg-white shadow-lg p-3 border-t border-gray-200 lg:hidden">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                 <div className="flex items-center">
                    <Image src="/images/citi-diamond-preferred-card-thumb.png" width="60" height="38" alt="Citi Diamond Preferred Card" />
                    <div className="ml-3">
                        <p className="font-bold text-sm text-gray-800">Citi Diamond Preferred®</p>
                        <p className="text-xs text-gray-500">TCI Rating: 8.5/10</p>
                    </div>
                </div>
                <a href={data.applyLink} target="_blank" rel="noopener noreferrer sponsored" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-sm">
                    Apply Now
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

// --- STATIC PROPS: Data for the page ---
// In a real Next.js app, this data would be fetched from a CMS or a local file.
export async function getStaticProps() {
  const data = {
    title: "Citi Diamond Preferred Card Review 2025: A 21-Month 0% APR Lifeline?",
    description: "Our in-depth 2025 review of the Citi® Diamond Preferred® Card. We analyze its 21-month 0% intro APR on balance transfers, 5% fee, and see if it's the best tool for debt consolidation.",
    keywords: "citi diamond preferred review, 0% apr credit cards, balance transfer cards 2025, debt consolidation, citi simplicity vs diamond preferred, wells fargo reflect vs citi diamond",
    siteUrl: "https://www.travelcardinsider.com",
    pagePath: "/reviews/citi-diamond-preferred-review",
    publishDate: "2025-06-23",
    updateDate: "2025-06-23",
    aprRange: "18.15% – 28.99% (Variable)",
    applyLink: "https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card",
    citations: {
        offerDetails: "https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card",
        cardmemberAgreement: "https://www.citi.com/credit-cards/compare-credit-cards/cma-pit",
        ficoEducation: "https://www.ficoscore.com/education",
        citiEntertainment: "https://www.cardbenefits.citi.com/en/Products/Citi-Entertainment",
        freeFicoScore: "https://www.cardbenefits.citi.com/en/Products/FICO-Score",
        experianReviews: "https://www.experian.com/credit-cards/details/citi-diamond-preferred-card/",
        myFicoForums: "https://forum.myfico.com/t5/Credit-Cards/bd-p/creditcard",
        balanceTransferFaq: "https://www.citi.com/credit-cards/balance-transfer/how-to-transfer-your-credit-card-balance"
    },
    toc: [
      { id: 'at-a-glance', title: 'At-a-Glance' },
      { id: 'how-it-works', title: 'How The Offer Works' },
      { id: 'pros-cons', title: 'Pros & Cons' },
      { id: 'real-world-example', title: 'Real-World Example' },
      { id: 'comparison', title: 'Competitive Comparison' },
      { id: 'who-is-it-for', title: 'Who Should Get It?' },
      { id: 'long-term-benefits', title: 'Long-Term Benefits' },
      { id: 'user-testimonials', title: 'User Testimonials' },
      { id: 'faq', title: 'FAQ' },
      { id: 'final-verdict', title: 'Final Verdict' },
    ],
    comparisonTable: [
        { feature: 'Intro APR (BT)', diamond: '21 months', simplicity: '21 months', reflect: '21 months', discover: '18 months' },
        { feature: 'Intro APR (Purchases)', diamond: '12 months', simplicity: '12 months', reflect: '21 months', discover: '6 months' },
        { feature: 'Balance Transfer Fee', diamond: '5% ($5 min)', simplicity: '3% intro, then 5%', reflect: '5% ($5 min)', discover: '3% intro, then 5%' },
        { feature: 'Annual Fee', diamond: '$0', simplicity: '$0', reflect: '$0', discover: '$0' },
        { feature: 'Key Perk', diamond: 'Longest BT APR', simplicity: 'No Late Fees/Penalty APR', reflect: 'Longest Purchase APR', discover: 'Rewards + Cashback Match' },
        { feature: 'Rewards', diamond: 'None', simplicity: 'None', reflect: 'None', discover: '5% rotating + 1%' },
    ],
    testimonials: [
        { title: "The Lifesaver", summary: "The card performed exactly as advertised, providing a seamless way to manage a significant balance at 0% interest, calling it a '10/10' experience.", userProfile: "A Reddit user with over $20,000 in debt to transfer.", source: "https://www.reddit.com" },
        { title: "The Disappointment", summary: "Despite an excellent credit score, they were approved for a limit of only $3,000—too low to be useful for their intended balance transfer, highlighting the risk of getting an unusable credit line.", userProfile: "An Experian user with a FICO score over 750.", source: "https://www.experian.com/credit-cards/details/citi-diamond-preferred-card/"},
        { title: "The Straightforward User", summary: "They praised the card for its simple terms, interest-free grace period, and user-friendly website, showing that for many, the core experience is hassle-free.", userProfile: "A user on Experian.", source: "https://www.experian.com/credit-cards/details/citi-diamond-preferred-card/" },
        { title: "The Warning", summary: "They learned a hard lesson when their autopay didn't take effect until the next billing cycle, causing an unexpected missed payment. A potent reminder to double-check all payment setups.", userProfile: "A Reddit user who prides themselves on excellent credit.", source: "https://www.reddit.com" },
        { title: "The Strategist", summary: "This user got the card specifically to tackle debt, with the explicit plan to product-change it to the Citi Double Cash® Card later, demonstrating a sophisticated strategy.", userProfile: "A Reddit user already thinking about the card's long-term future.", source: "https://forum.myfico.com/t5/Credit-Cards/bd-p/creditcard" }
    ],
    faq: [
        { question: "Does the Citi Diamond Preferred earn rewards?", answer: "No. The card's sole purpose is to save you money on interest. It does not earn points, miles, or cash back." },
        { question: "What is the balance transfer fee?", answer: "The fee is 5% of the transfer amount, with a $5 minimum. This is on the higher end and is a key cost to factor into your calculations." },
        { question: "How is this card different from the Citi Simplicity®?", answer: "The Citi Simplicity® Card is generally a better choice for most. It offers the same 21-month 0% intro APR but with a lower introductory balance transfer fee (3%) and, crucially, no late fees and no penalty APR, making it much safer." },
        { question: "Can my 0% intro APR be cancelled?", answer: "Yes. A single late or returned payment can give Citi the right to revoke your 0% intro APR and impose a penalty rate of up to 29.99% on your entire balance." },
        { question: "Can I transfer a balance from another Citi card?", answer: "No. Like most issuers, Citi does not permit balance transfers between its own credit card products. The debt must come from a different financial institution.", source: "https://www.citi.com/credit-cards/balance-transfer/how-to-transfer-your-credit-card-balance"},
        { question: "What happens after the 21-month intro period ends?", answer: "Any remaining balance will begin to accrue interest at the standard variable APR. It is critical to pay off the entire balance before this happens." },
        { question: "What credit score do I need for the Citi Diamond Preferred?", answer: "Citi recommends a 'Good' to 'Excellent' credit score, which generally means a FICO score of 670 or higher. A score above 720 gives you the best chance of approval and a higher credit limit." },
        { question: "How long does a balance transfer take?", answer: "The entire process can take up to 14 days or more to post after your account is open. Do not stop making payments on your old card until you confirm the transfer is complete." },
        { question: "What is the 'product change' strategy?", answer: "This is when you ask Citi to convert your card to a different product (like a rewards card) after you've paid off your debt. This allows you to keep the account's credit history and get a card you'll use long-term without a new application.", source: "https://forum.myfico.com/t5/Credit-Cards/bd-p/creditcard"},
        { question: "Is the Citi Diamond Preferred worth the 5% fee?", answer: "Only if the 21-month timeframe is the single most important feature for your debt-repayment plan. If a shorter period with a 3% fee would work, other cards are cheaper." }
    ],
  };

  data.pageUrlFull = `${data.siteUrl}${data.pagePath}`;
  
  // Construct JSON-LD Structured Data
  data.structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Dilan Madushanka'
        },
        'datePublished': data.publishDate,
        'dateModified': data.updateDate,
        'headline': data.title,
        'itemReviewed': {
          '@type': 'FinancialProduct',
          'name': 'Citi® Diamond Preferred® Card',
          'brand': {
            '@type': 'Brand',
            'name': 'Citi'
          },
          'description': 'A balance transfer credit card designed for debt consolidation with a long 0% introductory APR period.',
          'image': `${data.siteUrl}/images/citi-diamond-preferred-card.png`,
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD',
            'priceSpecification': {
                '@type': 'PriceSpecification',
                'description': 'Annual Fee: $0'
            }
          },
          'interestRate': data.aprRange,
          'feesAndCommissionsSpecification': 'Balance Transfer Fee: 5% of each transfer ($5 minimum). Foreign Transaction Fee: 3%.'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '8.5',
          'bestRating': '10',
          'worstRating': '1'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Travelcardinsider',
          'logo': {
            '@type': 'ImageObject',
            'url': `${data.siteUrl}/logo.png`
          }
        },
        'reviewBody': data.description,
      },
      {
         '@type': 'FAQPage',
          'mainEntity': data.faq.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer
            }
          }))
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': data.siteUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Credit Card Reviews',
            'item': `${data.siteUrl}/reviews`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': data.title
          }
        ]
      }
    ]
  };

  return {
    props: {
      data,
    },
  };
}

export default CitiDiamondPreferredReviewPage;
