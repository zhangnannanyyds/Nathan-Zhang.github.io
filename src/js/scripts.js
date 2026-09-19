const yearElement = document.getElementById('currentYear');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const copyEmailButton = document.getElementById('copyEmail');

if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async () => {
        const email = copyEmailButton.dataset.email;
        const label = copyEmailButton.querySelector('span');

        if (!email || !label || !navigator.clipboard) {
            window.location.href = `mailto:${email || ''}`;
            return;
        }

        try {
            await navigator.clipboard.writeText(email);
            label.textContent = '邮箱已复制';
            setTimeout(() => {
                label.textContent = '复制邮箱地址';
            }, 1800);
        } catch (_error) {
            window.location.href = `mailto:${email}`;
        }
    });
}
