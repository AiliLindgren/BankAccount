// BANK ACCOUNT

const account = {
  accountName: "Aili Lindgren Savings Account",
  balance: 100,

  getBalance: function () {
    alert(`Account balance: ${this.balance} $`);
    atm();
  },

  deposit: function () {
    // User-input in a prompt window is always a string. First the user-input gets stored in the variable sumToDeposit to be able to check against null, and that is to be able to se if the user clicks the cancel-button. (The cancel-button in a prompt window returns null.)
    let sumToDeposit = prompt(
      "How much would you like to deposit? Enter a number in dollars."
    );

    // If user clicks cancel-button, the atm() function gets called again and it all starts over. If the user clicks the ok-button or types in anything, the user-input gets parsed into a floating point number through the parseFloat() funtion.
    if (sumToDeposit === null) {
      atm();
    } else {
      sumToDeposit = parseFloat(sumToDeposit);
      // If the user-input is a falsy value or is less or equal to 0, the accountError() function with an error message gets called. Else, that is if the user has typed in a valid number (a number that is above 0), the number gets added to the current balance and the new balance is showed to the user.
      if (!sumToDeposit || sumToDeposit <= 0) {
        this.accountError();
      } else {
        this.balance += sumToDeposit;
        alert(
          `You have deposited: ${sumToDeposit} $\nBalance after deposit: ${this.balance} $`
        );
      }
      atm();
    }

    // // Kommentar till mig själv: Den här while-loopen fungerade tillsammans med accountError() när den var en metod med en prompt() som returvärde, men då gick det inte att klicka sig ur fönstret med Cancel-knappen utan användaren var tvungen att sätta in minst 1 $ för att komma till huvudmenyn igen. Den kräver också att sumToDeposit direkt från början var ett parseFloatat nummer, kan inte användas till att prompten bara sparas i en variabel utan att ha parsats till en siffra först.
    // while (!sumToDeposit || sumToDeposit <= 0) {
    //   sumToDeposit = parseFloat(this.accountError());
    // }
  },

  withdrawal: function () {
    // let sumToWithdraw = parseFloat(
    //   prompt("How much would you like to withraw? Enter a number in dollars.")
    // );

    let sumToWithdraw = prompt(
      "How much would you like to withraw? Enter a number in dollars."
    );

    if (sumToWithdraw === null) {
      atm();
    } else {
      sumToWithdraw = parseFloat(sumToWithdraw);
      if (!sumToWithdraw || sumToWithdraw < 0 || sumToWithdraw > this.balance) {
        this.accountError();
      } else {
        this.balance -= sumToWithdraw;
        alert(
          `You have withdrawn: ${sumToWithdraw} $\nBalance after deposit: ${this.balance} $`
        );
      }
      atm();
    }

    // //Kommentar till mig själv: Den här while-loopen fungerade tillsammans med accountError() när den var en metod med en prompt() som returvärde, men då gick det inte att klicka sig ur fönstret med Cancel-knappen utan användaren var tvungen att ta ut minst 1 $ för att komma till huvudmenyn igen. Den kräver också att sumToWithdraw direkt från början var ett parseFloatat nummer, kan inte användas till att prompten bara sparas i en variabel utan att ha parsats till en siffra först.
    // while (
    //   !sumToWithdraw ||
    //   sumToWithdraw < 0 ||
    //   sumToWithdraw > this.balance
    // ) {
    //   sumToWithdraw = parseFloat(this.accountError());
    // }
  },

  getAccountName: function () {
    alert(`Name of account: ${this.accountName}`);
    atm();
  },

  accountError: function () {
    alert(`Not a valid number.\nAccount balance: ${this.balance} $`);

    // // Kommentar till mig själv: Först var detta en funktion med ett returvärde och utan alerten. Den fungerade ihop med while-looparna i deposit- och withdrawal-funktionerna.
    // return prompt(
    //   `The number you entered is invalid. Enter a number above 0.\nAccount balance: ${this.balance} $`
    // );
  },

  exitAccount: function () {
    // The method window.open("", "_self").close(); loads a blank url (the first argument) in the current window (the second argument) and then instantaneously closes the window. This works because when close() is called, the current window has been opened by JS. Otherwise a window that has not been opened by JS can not be closed with JS, due to security reasons.
    let exit = confirm("Do you want to exit?");
    if (exit) {
      window.open("", "_self").close();
    } else {
      atm();
    }
  },
};

atm();

// STARTER FUNCTION
function atm() {
  //   // I chose to have the menu presented on separate rows instead of on one row.

  let choice = prompt(
    "Select a choice:\n1) See balance\n2) Make deposit\n3) Make a withdrawal\n4) Get account name\n5) Exit"
  );

  if (choice === null) {
    account.exitAccount();
  } else {
    choice = parseInt(choice);

    // I chose the switch statement because I think it is more dry and looks cleaner in this case. I don't have to repeat the variable name six times.
    switch (choice) {
      case 1:
        account.getBalance();
        break;
      case 2:
        account.deposit();
        break;
      case 3:
        account.withdrawal();
        break;
      case 4:
        account.getAccountName();
        break;
      case 5:
        account.exitAccount();
        break;
      default:
        atm();
    }
  }

  // Function to open the new window that replaces the already opened window. The function is never used since the Open ATM-button in the html is removed because it is not needed.
  // let newWindow;
  // function windowOpen() {
  //   newWindow = window.open("index.html", "_self");
  // }

  // Function to close the window that was opened by windowOpen().
  // function windowClose() {
  //   newWindow.close();
}
