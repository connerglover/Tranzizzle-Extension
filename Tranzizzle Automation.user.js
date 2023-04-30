// ==UserScript==
// @name          Tranzizzle Automation
// @version       1.0
// @author        Conner Glover
// @description   A UserScript ta automatically redirect every last muthafuckin joint you go to, ta tha Gizoogle Website Transizzle Version of tha joint.
// @run-at        document-start
// @match         *://*/*
// @copyright     2023, Conner Glover
// ==/UserScript==

const gizoogleUrl = "https://www.gizoogle.net/tranzizzle.php?search=";

if (!window.location.href.includes(gizoogleUrl)) {
  window.location.replace(gizoogleUrl + window.location.href);
}