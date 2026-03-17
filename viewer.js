function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || 'License Document',
        type: params.get('type') || 'Unknown',
        file: params.get('file') || '',
        status: params.get('status') || 'Unspecified',
        scope: params.get('scope') || 'Unspecified',
        citationId: params.get('citationId') || 'Unspecified',
        version: params.get('version') || 'Unspecified',
        effectiveDate: params.get('effectiveDate') || 'Unspecified'
    };
}

async function loadLicense() {
    const { name, type, file, status, scope, citationId, version, effectiveDate } = getQueryParams();
    const titleEl = document.getElementById('licenseTitle');
    const typeEl = document.getElementById('licenseType');
    const statusEl = document.getElementById('licenseStatus');
    const citationEl = document.getElementById('citationId');
    const scopeEl = document.getElementById('licenseScope');
    const versionEl = document.getElementById('licenseVersion');
    const effectiveEl = document.getElementById('effectiveDate');
    const textEl = document.getElementById('licenseText');
    const downloadLink = document.getElementById('downloadLink');

    titleEl.textContent = name;
    typeEl.textContent = type;
    statusEl.textContent = status;
    citationEl.textContent = citationId;
    scopeEl.textContent = scope;
    versionEl.textContent = version;
    effectiveEl.textContent = effectiveDate;

    if (!file) {
        textEl.value = 'No license file was provided.';
        downloadLink.style.display = 'none';
        return;
    }

    const encodedPath = encodeURI(file);
    downloadLink.href = encodedPath;

    try {
        const response = await fetch(encodedPath, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Unable to load the selected license.');
        }

        const content = await response.text();
        textEl.value = content;
        textEl.scrollTop = 0;
    } catch (error) {
        textEl.value = 'Error loading license content. Please use the download button.';
    }
}

document.addEventListener('DOMContentLoaded', loadLicense);
