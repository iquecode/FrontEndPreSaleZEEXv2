//const testNetABISwap         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getParams","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//const ABI_USDTFaucet         = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//const testNetaddressSwap     = '0x17CB7a3757bDD25BF0d7429F72ddf35Fe628bE3A'; 
//const testNetwalletReceiver  = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  //wallet to recevid USDT Faucet - test1 - testnet
//const testNetUSDTFaucet      = "0xEdA7631884Ee51b4cAa85c4EEed7b0926954d180";   //USDT Faucet - testnet
//const testNetZEEXFaucet      = "0xa8f8C76CE1528a20e6E837B9d3f53FDFEe0dCD32";
//const testnetZEEXFaucetOwner = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  
//const testNetID = "icjV9myfJZSXquMizlOWyS5NQrI6V8as9vGQCuUh";
//const testNetServer = "https://bm6o8beqxl5a.moralishost.com:2053/server";
//const testNetchainId = 97;
//const walletReceiver  = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  //wallet to recevid USDT Faucet - test1 - testnet
//const tokenAddress    = "0xEdA7631884Ee51b4cAa85c4EEed7b0926954d180";   //USDT Faucet - 


const ABI_swap  = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getParams","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const ABI_USDT               = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const mainNetID = "vBWARY9nnQJcpHgh4KVMgLX7Y53WoY14yGgl4qAj";
const mainNetServer = "https://gz89rdj1zsqk.moralishost.com:2053/server";
const mainNetchainId = 56;
const walletReceiver = "0xa7Ada24C9E91e50c2d9C98B15635f4e8CDeC45C2";  //wallet to recevid USDT - Zeex-SwapV1
const tokenAddress = "0x55d398326f99059fF775485246999027B3197955";   //USDT - Binance Snmart Chain  
const tokenDecimals = 18; 
const addressSwap = "0xe7ed5E31269F62E955d7dA97084402dF5cAEBcA2";



Moralis.initialize(mainNetID); // Application id from moralis.io
Moralis.serverURL = mainNetServer; //Server url from moralis.io


function showModal(title,msg,keyboard=true) {
    document.getElementById("modal1-title").innerHTML = title;
    document.getElementById("modal1-msg").innerHTML = msg;
    if(keyboard) {
        $("#modal1").modal();
    } else {
        $("#modal1").modal({backdrop: 'static', keyboard: false});
    }       
}

function showModalMM(title,msg) {
    document.getElementById("mm-title").innerHTML = title;
    document.getElementById("mm-msg").innerHTML = msg;
    $("#modal_meta_mask").modal({backdrop: 'static', keyboard: false});
}


function showModalAlternative() {
    console.log("modal alternative");
    $("#modalAlternative").modal();
}

function clearForm() {
    document.getElementById('InputName').value='';
    document.getElementById('InputEmail').value='';
    document.getElementById('InputUSDT').value='';
    $("#modal1").modal('hide');
    $("#modal2").modal('hide');
    $("#modal3").modal('hide');
}

async function sendEmail(email, name, usdt) {
    const params = { email: email, name: name, usdt: usdt};
    await Moralis.Cloud.run("sendPrivateSaleEmail", (InputEmail, params));
    console.log("send email");
}

async function sendForm(email, name, txn, address, to="iquecode@gmail.com") {
    const params = { email: email, name: name, txn: txn, address: address, to: to};
    await Moralis.Cloud.run("sendForm", (InputEmail, params));
    console.log("send email");
}

async function buyZeex(amountUSDT) {
    $("#modal3").modal({backdrop: 'static', keyboard: false});
    let user = Moralis.User.current();
        
    try {
       user = await Moralis.authenticate();
    } catch (error) {
        $("#modal3").modal('hide');
        showModal("Error", "error: " + error.code + ". " + error.message)
    }       
    
    
    $("#modal3").modal('hide');
    $("#modal_meta_mask").modal('hide');
    
    if (user) {

        $("#modal2").modal({backdrop: 'static', keyboard: false});

        console.log(user);
        const name  = document.getElementById("InputName").value;
        const email = document.getElementById("InputEmail").value;
        user.set("name",name);
        user.setEmail(email);
        user.save();

        const amountUSDTdecimals = amountUSDT + '000000000000000000'; //18 casas decimais
        const approveExpense = {  
            contractAddress: tokenAddress,  
            functionName: "approve",  
            abi: ABI_USDT,  
            params: {    
                spender: addressSwap, amount: amountUSDTdecimals
            },
        };
        const doSwap = {  
            contractAddress: addressSwap,  
            functionName: "swap",  
            abi: ABI_swap,  
            params: {    
                amountUSDT: amountUSDTdecimals
            },
        };

        let approve = false;
        let swap = false;
        try {
            approve = await Moralis.executeFunction(approveExpense);
            if (approve) {
                swap = await Moralis.executeFunction(doSwap);
            }
        } catch (error) {
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
        }
        
        if (swap) {
            $("#modal2").modal('hide');
            clearForm();
            sendEmail(email, name, `${amountUSDT}`);
            showModal("Success", "Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com." );
        }
    }
 }

function submitBuyZeex() {
    const amountUSDT = parseInt(document.getElementById("InputUSDT").value);
    let error = "";
    let ok = true;
    if (Number.isInteger(amountUSDT)==false) {
        error = "Invalid format. Only enter USDT without decimals";
        ok = false;
    }
    if ( amountUSDT < 30 ) {
        error = "Minimum investment of USDT 30 in pre sale.";
        ok = false;
    }
    if ( ok ) {
        const amoutZeex = (amountUSDT / 0.33).toFixed(6);
        let msginfo = "Three confirmations will be requested in Meta Mask: 1st for connection, 2nd to approve swap contract, 3rd swap execution USDT ";
        msginfo += amountUSDT + " for ZEEX " + amoutZeex;
        showModalMM('Secure swap brokered by public smart contract', msginfo);
        buyZeex(amountUSDT);
    }
    else {
        showModal("Error",error);
    }
}

function submitFormAlt() {
    const name    = document.getElementById("name-alt").value;
    const txn     = document.getElementById("txn-alt").value;
    const address = document.getElementById("address-alt").value;
    const email   = document.getElementById("email-alt").value;
    let error = "";
    let ok = true;
    if (!txn || !address || !email ) {
        error = "Required field not filled in";
        ok = false;
    }
    if ( ok ) {
        $("#modalAlternative").modal('hide')
        sendForm(email, name, txn, address, "iquecode@gmail.com") 
        showModal("Confirmation","Information sent successfully. You will receive an email within 1 business day confirming the credit of your ZEEX/USDZ at the address provided. Inquiries, send an email to concatc@artzeex.com.");
    }
}



let inputUSDT = document.querySelector('#InputUSDT');
inputUSDT.addEventListener('input', function() {
  const priceUSDThelp = document.getElementById("priceUSDTHelp");
  priceUSDThelp.innerHTML = `Receive ${(this.value / 0.33).toFixed(4)} ZEEX! : )`;
  if (this.value < 30) {
    priceUSDThelp.innerHTML = "1 ZEEX = 0.33 USDT | 1 USDT = 3.0303 ZEEX."
  } 
});


document.getElementById("btn-buyZeex").onclick = submitBuyZeex;
document.getElementById("link-alternative").onclick = showModalAlternative;
document.getElementById("btn-submit-alt").onclick = submitFormAlt;