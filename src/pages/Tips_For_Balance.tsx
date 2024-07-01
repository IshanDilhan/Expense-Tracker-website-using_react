import { Text } from "@mantine/core";
import PageContainer from "../layout/PageContainer";

const Tips_For_Balance = () => {
  return (
    <PageContainer>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
      >
        <img
          src="../public/999.png"
          alt="Katherine Johnson"
          height="600"
          style={{ marginLeft: "20px" }}
        />
        <div>
          <Text
            size={70}
            weight={1000}
            mb={20}
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "Helvetica, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "600px",
            })}
          >
            10 Simple Ways To Manage Your Money Better
          </Text>
        </div>
      </div>

      <div style={{ alignItems: "center", marginLeft: "100px" ,marginRight: "100px" ,marginTop: "100px" }}>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>1. Have a budget:</strong> Many people don’t budget because
          they don’t want to go through what they think will be a boring process
          of listing out expenses, adding up numbers, and making sure everything
          lines up. If you’re bad with money, you don’t have room for excuses
          with budgeting. If all it takes to get your spending on track is a few
          hours working a budget each month, why wouldn’t you do it? Instead of
          focusing on the process of creating a budget, focus on the value that
          budgeting will bring to your life.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>2. Use the budget:</strong> Your budget is useless if you make
          it then let it collect dust in a folder tucked away in your bookshelf
          or file cabinet. Refer to it often throughout the month to help guide
          your spending decisions. Update it as you pay bills and spend on other
          monthly expenses. At any given time during the month, you should have
          an idea of how much money you’re able to spend, considering any
          expenses you have left to pay.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>3. Give yourself a limit for unbudgeted spending:</strong> A
          critical part of your budget is the net income or the amount of money
          left after you subtract your expenses from your income. If you have
          any money left over, you can use it for fun and entertainment, but
          only up to a certain amount. You can’t go crazy with this money,
          especially if it’s not a lot and it has to last the entire month.
          Before you make any big purchases, make sure it won’t interfere with
          anything else you have planned.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>4. Track your spending:</strong> Small purchases here and
          there add up quickly, and before you know it, you’ve overspent your
          budget. Start tracking your spending to discover places where you may
          be unknowingly overspending. Save your receipts and write your
          purchases in a spending journal, categorizing them so you can identify
          areas where you have a hard time keeping your spending in check.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>5. Don’t commit to any new recurring monthly bills:</strong>{" "}
          Just because your income and credit qualify you for a certain loan,
          doesn’t mean you should take it. Many people naively think the bank
          wouldn’t approve them for a credit card or loan they can’t afford. The
          bank only knows your income, as you’ve reported, and the debt
          obligations included on your credit report, not any other obligations
          that could prevent you from making your payments on time. It’s up to
          you to decide whether a monthly payment is affordable based on your
          income and other monthly obligations.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>6. Make sure you’re paying the best prices:</strong> You can
          make the most of your money comparison shopping, ensuring that you’re
          paying the lowest prices for products and services. Look for
          discounts, coupons, and cheaper alternatives whenever you can.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>7. Save up for big purchases:</strong> The ability to delay
          gratification will go a long way in helping you be better with money.
          When you put off large purchases, rather than sacrificing more
          important essentials or putting the purchase on a credit card, you
          give yourself time to evaluate whether the purchase is necessary and
          even more time to compare prices. By saving up rather than using
          credit, you avoid paying interest on the purchase. And if you save
          rather than skipping bills or obligations, well, you don’t have to
          deal with the many consequences of missing those bills.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>8. Limit your credit card purchases:</strong> Credit cards are
          a bad spender's worst enemy. When you run out of cash, you simply turn
          to your credit cards without considering whether you can afford to pay
          the balance. Resist the urge to use your credit cards for purchases
          you can’t afford, especially on items you don’t really need.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>9. Contribute to savings regularly:</strong> Depositing money
          into a savings account each month can help you build healthy financial
          habits. You can even set it up so the money is automatically
          transferred from your checking account to your savings account. That
          way, you don’t have to remember to make the transfer.
        </p>
        <p style={{ color: "#555", fontSize: "18px" }}>
          <strong>10. Being good with money takes practice:</strong> In the
          beginning, you may not be used to planning ahead and putting off
          purchases until you can afford them. The more you make these habits
          part of your daily life, the easier it is to manage your money, and
          the better off your finances will be.
        </p>
      </div>

      <div style={{ marginTop: "-10px" }}>
  <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginLeft: "80px" }}>
  <Text
            size={40}
            weight={1000}
            mb={20}
            align="left"
            sx={(theme) => ({
              color: theme.colors.dark,
              fontFamily: "sans-serif",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "100px"
            })}
          >
          Other useful links
          </Text>
  </h2>
  <ul style={{ listStyleType: "none", padding: 0, marginLeft: "100px" ,marginBottom: "100px"}}>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.mint.com" target="_blank" rel="noopener noreferrer">Mint</a> - Personal finance management tool for budgeting, tracking expenses, and setting financial goals.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.ynab.com" target="_blank" rel="noopener noreferrer">You Need a Budget (YNAB)</a> - Helps you gain control of your money by teaching you how to prioritize and plan your spending.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.personalcapital.com" target="_blank" rel="noopener noreferrer">Personal Capital</a> - Offers tools for investment tracking, retirement planning, and wealth management.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.nerdwallet.com" target="_blank" rel="noopener noreferrer">NerdWallet</a> - Provides information and advice on personal finance topics including credit cards, mortgages, and investing.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.creditkarma.com" target="_blank" rel="noopener noreferrer">Credit Karma</a> - Offers free credit scores, reports, and monitoring, as well as personalized recommendations for financial products.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.bankrate.com" target="_blank" rel="noopener noreferrer">Bankrate</a> - Provides information and tools for comparing rates on mortgages, credit cards, savings accounts, and more.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia</a> - Offers educational content on investing, finance, and market analysis.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.budgettracker.com" target="_blank" rel="noopener noreferrer">BudgetTracker</a> - Online money management tool for tracking expenses, creating budgets, and setting financial goals.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.financialexpress.com" target="_blank" rel="noopener noreferrer">Financial Express</a> - Provides news and analysis on finance, business, and the economy.
    </li>
    <li style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
      <a href="https://www.smartasset.com" target="_blank" rel="noopener noreferrer">SmartAsset</a> - Offers tools and calculators for making financial decisions, including mortgage, investment, and retirement calculators.
    </li>
  </ul>
</div>

    </PageContainer>
  );
};

export default Tips_For_Balance;