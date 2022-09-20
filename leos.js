// import javax.swing.*;

// public class pythagoras{
// 	public static void main (String[] arg) {
// 	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
// 	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
// 	double c = Math.sqrt(a*a + b*b);
// 	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
// 	}
// }

// ni behöver 2 inmatningar och sedan en uträkning och en utskrift

const sida1 = document.querySelector('#input-field1');
const sida2 = document.querySelector('#input-field2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const sid1 = sida1.value;
    const sid2 = sida2.value;
    const hypo = Math.sqrt(sid1 * sid1 + sid2 * sid2);
    const messageBox = document.querySelector('#message-box');
    let message = document.createElement('p');
    message.textContent = `Hypotenusan är ${hypo} cm`;
    messageBox.appendChild(message);
});