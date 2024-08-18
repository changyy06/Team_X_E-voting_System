# E-Voting System

Welcome to the E-Voting System project developed by **Team_X**. This project provides an online voting platform where users can vote for candidates in an election. The system also supports wallet creation and token balance management.

## Features

- **Vote for Candidates:** Users can select and vote for their preferred candidates.
- **Wallet Management:** Create a wallet to participate in voting.
- **Token Balance:** Display and manage token balance. Voting deducts 1 token from the balance.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Framer Motion, React Toastify, Font Awesome
- **Backend:** [API details here]
- **Styling:** Tailwind CSS

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/e-voting-system.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd e-voting-system
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Creating a Wallet:**
   - Click on the "Create Wallet" button.
   - Follow the prompts to create a wallet.

2. **Voting:**
   - Select a candidate by clicking the radio button.
   - Click "Submit Vote" to cast your vote.

3. **Token Balance:**
   - The token balance is displayed at the top corner of the interface.
   - 1 token will be deducted from your balance after each vote.

## Project Structure

- `components/`
  - `CreateWalletModal.js`: Modal for wallet creation.
  - `VotingSystem.js`: Main voting interface.
- `pages/`
  - `index.js`: Home page.
- `public/`
  - `favicon.ico`: Favicon for the application.
- `styles/`
  - `globals.css`: Global styles.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make your changes and commit them:**

    ```bash
    git add .
    git commit -m "Add your commit message here"
    ```

4. **Push to your branch:**

    ```bash
    git push origin feature/your-feature
    ```

5. **Open a Pull Request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Team_X** - Building a better voting experience!
