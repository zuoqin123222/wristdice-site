(() => {
  "use strict";
  const email = window.WristDiceSite?.supportEmail?.trim() ?? "";
  if (!/^[^\s@<>"'?#:]+@[^\s@<>"'?#:]+\.[^\s@<>"'?#:]+$/.test(email)) return;
  const link = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("WristDice 支持请求")}`;
  document.querySelectorAll("[data-support-email]").forEach(node => {
    node.href = link;
    if (!node.classList.contains("button")) node.textContent = email;
  });
  document.querySelectorAll("[data-support-address]").forEach(node => { node.textContent = email; });
  document.querySelectorAll("#contact, [data-contact-line]").forEach(node => { node.hidden = false; });
})();
