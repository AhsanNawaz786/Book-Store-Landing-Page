import React from 'react';

const FascinationWall: React.FC = () => {
  // Sample text excerpts from the book
  const bookExcerpts = [
    {
      id: 1,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p style={{ color: 'blue' }}><b>This "fast action" ".</b></p>
          <p>technique is proven</p>
          <p>to compel prospects. </p>
          <p>Used by copywriting</p>
          <p>pioneers like Claude</p>
          <p>Hopkins, Eugene</p>
          <p>Schewartz, Gary</p>
          <p>Halbert, and almost</p>
          <p>every A-list copywritter </p>
          of the past century.<p style={{ color: 'blue' }}><u><b>Page 50.</b></u></p>
        </div>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <p>Excellent ads arrest our </p>
          <p>attention, which is </p>
          <p style={{ color: 'blue' }}>what this strategy</p>
          <p>works to accomplish.</p>
          <p>Over time, it can 10x</p>
          your ad's responnse rate.
          <p style={{ color: 'blue' }}><b><u>Page 14.</u></b></p>
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>What smart direct</p>
          <p>marketer do to</p>
          <p>increase responnse rates</p>
          <p>while also gradually</p>
          <p style={{ color: 'blue' }}>reducing costs. This</p>
          <p>practical approach will </p>
          almost always work.
          <p style={{ color: 'blue' }}><b><u>Page 43</u></b></p>
          </div>
        </>
      ),
    },
    {
      id: 4,
      text: (
        <>
          <p>What never makes your</p>
          <p>advertising more</p>
          <p>believable. When</p>
          <p>copywritters make this </p>
          <p style={{ color: 'blue' }}>mistake, their claims</p>
          usually fall flat.
          <p style={{ color: 'blue' }}><b><u>Page 20.</u></b></p>
        </>
      ),
    },
    {
      id: 5,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>If your ad's response rate</p>
          <p>is high, it's</p>
          <p>successful --right?</p>
          <p>Wrong. Many replies </p>
          are actually worthless.
          <span  style={{ color: 'blue',fontWeight: 'bold' }}> <b><u>Page 3</u></b> </span> <p> explains why</p>
          <p style={{ color: 'blue' }}>this metric is the</p>
          <p>most reliable way to</p>
          <p>measure your</p>
          <p>advertising</p>
          <p>performance.</p>
          </div>
        </>
      ),
    },
    {
      id: 6,
      text: (
        <>
          <p>Why clever ads often</p>
          <p>don't work. <span style={{ color: 'blue', fontWeight: 'bold' }}><b><u>Page 6.</u></b></span></p>
        </>
      ),
    },
    {
      id: 7,
      text: (
        <>
          <div className="description-with-background-shadow">
          <p>It's proven; when you</p>
          <p style={{ color: 'blue' }}>follow this 8-word</p>
          <p>motto, you'll create</p>
          <p>better ads. A-list</p>
          <p>copywritters don't call it</p>
          <p>the "golden rule" of</p>
          advertising for nothing.
          <p style={{ color: 'blue' }}><u><b>Page 12.</b></u></p>
          </div>
        </>
      ),
    },
    {
      id: 8,
      text: (
        <>
          <p>Do color ads convert</p>
          <p>better than black &</p>
          <p>white ads? It depends.</p>
          <p>Discover exactly when</p>
          <p>it makes sense to pay</p>
          more for color printing on
          <p style={{ color: 'blue' }}><u><b>Page 26.</b></u></p>
        </>
      ),
    },
    {
      id: 9,
      text: (
        <>
           <div className="description-with-background-shadow">
          <p>If you're running ads</p>
          <p>designed to change</p>
          <p>your prospects' habbits,</p>
          <p>read Claude</p>
          <p style={{ color: 'blue' }}>Hopkins' advice on the</p>
          <p style={{ color: 'blue' }}><u><b>Page 27.</b></u></p>
          <p>It may save</p>
          <p>you untold money,</p>
          <p>stress, and regret.</p>
          </div>
        </>
      ),
    },
    {
      id: 10,
      text: (
        <>
           <p>The quickest, easiest</p>
           <p>way to own a</p>
           <p>marketing claim. Try</p>
           <p>the time-sensitive</p>
           <p style={{ color: 'blue' }}>strategy on</p>
           <p style={{ color: 'blue' }}><u><b>Page 21</b></u></p>
           <p>(before your </p>
           <p>competition does) and</p>
           <p>give your product a </p>
           <p>permanent advantage.</p>
        </>
      ),
    },
    {
      id: 11,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>Don't waste your </p>
          <p>inventory! Sample</p>
          <p>marketing basically</p>
          <p>only works on</p>
          <p>prospects who meet the</p>
           <p style={{ color: 'blue' }}> 3 criteria on page </p>
          <p style={{ color: 'blue' }}><u><b>Page 38.</b></u></p>
        </div>
        </>
      ),
    },
    {
      id: 12,
      text: (
        <>
          <p>Finding distribution is</p>
          <p>one the hardest parts of</p>
          <p>bringing a new product </p>
          <p>to market. It's also one</p>
          <p>of the most important.</p>
          <p>Discover 5</p>
          <p style={{ color: 'blue' }}>refreshingly simple</p>
          <p>ways to do it on page</p>
          <p style={{ color: 'blue' }}><u><b>Page 39.</b></u></p>
        </>
      ),
    },
    {
      id: 13,
      text: (
        <>
         <div className="description-with-background-shadow">
           <p>Maximize your</p>
           <p>advertising return:</p>
           <p>follow this</p>
           <p style={{ color: 'blue' }}>billion-dollar</p>
           <p style={{ color: 'blue' }}>principle. Used by</p>
           <p>Campbell's, Palmolive,</p>
           <p>Ford, and other iconic brands</p>
           <p style={{ color: 'blue' }}><u><b>Page 33.</b></u></p>
          </div> 
        </>
      ),
    },
    {
      id: 14,
      text: (
        <>
          <p>How to make your</p>
          <p>advertising claims</p>
          <p>more believable; simply</p>
          <p style={{ color: 'blue' }}>use this technique,</p>
          <p>proven after 99 years of testing.</p>
          <p style={{ color: 'blue' }}><u><b>Page 31.</b></u></p>
        </>
      ),
    },
    {
      id: 15,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>How to turn a </p>
          <p>meaningless, made up </p>
          <p>name into a household</p>
          <p>brand. Kodak, Mazda,</p>
          <p>Vaseline, and other</p>
          <p>billion-dollar</p>
          <p>companies used the</p>
          <p style={{ color: 'blue' }}>approach on <u><b>Page 51.</b></u></p>
        </div>
        </>
      ),
    },
    {
      id: 16,
      text: (
        <>
          <p>CAUTION: this </p>
          <p style={{ color: 'blue' }}>controversial</p>
          <p style={{ color: 'blue' }}>marketing tactic</p>
          <p>can-and often</p>
          <p>will-backfire. Just one</p>
          <p>instance can hurt your</p>
          <p>brand, your reputation,</p>
          <p style={{ color: 'blue' }}>and your sales. <u><b>Page 47.</b></u></p>
        </>
      ),
    },
    {
      id: 17,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>The truth about</p>
          <p>word-of-mouth</p>
          <p>marketing. Casual</p>
          <p>recommendations</p>
          <p>rarely create long-term</p>
          <p>customers. This</p>
          <p style={{ color: 'blue' }}>emotional approach</p>
          <p>is much more effective.</p>
          <p style={{ color: 'blue' }}> <u><b>Page 45.</b></u></p>
          </div>


        </>
      ),
    },
    {
      id: 18,
      text: (
        <>
          <p>The best ads are based</p>
          <p style={{ color: 'blue' }}>on a very simple </p>
          <p style={{ color: 'blue' }}>concept. It will add</p>
          <p>trust and credibility to</p>
          <p>your claim, making</p>
          <p>your prospect more</p>
          <p>likely to buy. Revealed</p>
          <p style={{ color: 'blue' }}>on  <u><b> Page 8.</b></u></p>
        </>
      ),
    },
    {
      id: 19,
      text: (
        <>
         <div className="description-with-background-shadow">
          <p>Believe it or not, this</p>
          <p>feeling is among the </p>
          <p>strongest human</p>
          <p>incentives. It compels</p>
          <p>people to take action at </p>
          <p>an incredible rate. Use</p>
          <p>it in your ads whenever</p>
          <p style={{ color: 'blue' }}>you can <u><b>Page 16.</b></u></p>
        </div>
        </>
      ),
    },
    {
      id: 20,
      text: (
        <>
          <p style={{ color: 'blue' }}>Are you using this</p>
          <p style={{ color: 'blue' }}>unique technique to</p>
          <p>sell? Through some</p>
          <p>peculiar link in human</p>
          <p>psychology, it can</p>
          <p>catapult products from</p>
          <p>obscurity to hundreds</p>
          <p style={{ color: 'blue' }}>of thousands of Sales. <u><b> Page 17.</b></u></p>
        </>
      ),
    },
    
    // Add more excerpts as needed
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {bookExcerpts.map((excerpt) => (
        <div key={excerpt.id} className="p-4 border rounded-lg shadow-md">
          <div className="text-center">
            {/* Replace "Author's Name" with the actual author's name */}
           
            <p className="text-sm text-gray-600 font-bold">
              {excerpt.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FascinationWall;
