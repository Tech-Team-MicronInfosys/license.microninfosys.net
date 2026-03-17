const licenses = [
    {
        id: 'license-1',
        name: 'Micron Proprietary License - Client Projects',
        type: 'Proprietary',
        description: 'Standard proprietary terms for client-delivery projects (including websites).',
        file: 'licenses/LICENSE-PROPRIETARY-CLIENT-PROJECT.txt',
        status: 'Standard',
        scope: 'Client Project Delivery',
        citationId: 'MIS-LIC-CLIENT-PROPRIETARY',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    },
    {
        id: 'license-2',
        name: 'Micron Proprietary License - General Product',
        type: 'Proprietary',
        description: 'General proprietary terms for in-house software and product repos.',
        file: 'licenses/LICENSE-PROPRIETARY-INHOUSE.txt',
        status: 'Standard',
        scope: 'In-House Systems',
        citationId: 'MIS-LIC-INHOUSE-PROPRIETARY',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    },
    {
        id: 'license-3',
        name: 'Apache License 2.0 - Micron Open Source Standard',
        type: 'Open Source',
        description: 'Recommended open source license for company-led public projects.',
        file: 'licenses/LICENSE-APACHE-2.0.txt',
        status: 'Standard',
        scope: 'Public Open Source Repositories',
        citationId: 'MIS-LIC-OSS-APACHE-2.0',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    },
    {
        id: 'license-4',
        name: 'Micron Open Source Governance Standard',
        type: 'Policy',
        description: 'Consolidated baseline covering NOTICE, trademark, and contribution governance.',
        file: 'licenses/OPEN-SOURCE-GOVERNANCE-STANDARD-MICRON-INFOSYS.txt',
        status: 'Standard',
        scope: 'Public Open Source Repositories',
        citationId: 'MIS-STD-OSS-GOVERNANCE',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    },
    {
        id: 'license-5',
        name: 'Universal Code Of Conduct Standard',
        type: 'Policy',
        description: 'Single conduct baseline for both in-house teams and public open source collaboration.',
        file: 'licenses/CODE-OF-CONDUCT-UNIVERSAL-MICRON-INFOSYS.txt',
        status: 'Standard',
        scope: 'In-House Teams And Public Collaboration',
        citationId: 'MIS-STD-CODE-OF-CONDUCT',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    },
    {
        id: 'license-6',
        name: 'Security Policy',
        type: 'Policy',
        description: 'Baseline policy for vulnerability reporting, triage, and coordinated disclosure.',
        file: 'licenses/SECURITY-POLICY-MICRON-INFOSYS.txt',
        status: 'Standard',
        scope: 'All Micron Infosys Projects And Repositories',
        citationId: 'MIS-POL-SECURITY',
        version: 'v1.0',
        effectiveDate: '2026-03-18'
    }
];

function initializeLicenses() {
    const container = document.getElementById('licensesContainer');
    
    if (licenses.length === 0) {
        container.innerHTML = '<p class="empty-state">No licenses available yet.</p>';
        return;
    }

    container.innerHTML = licenses.map(license => createLicenseCard(license)).join('');
}

function createLicenseCard(license) {
    const encodedPath = encodeURI(license.file);
    const statusClass = license.status === 'Standard' ? 'status-standard' : 'status-nonstandard';
    return `
        <div class="license-card">
            <h3>${escapeHtml(license.name)}</h3>
            <span class="license-type">${escapeHtml(license.type)}</span>
            <span class="license-status ${statusClass}">${escapeHtml(license.status)}</span>
            <p>${escapeHtml(license.description)}</p>
            <p class="card-meta"><strong>Citation:</strong> ${escapeHtml(license.citationId)}</p>
            <p class="card-meta"><strong>Scope:</strong> ${escapeHtml(license.scope)}</p>
            <p class="card-meta"><strong>Version:</strong> ${escapeHtml(license.version)} | <strong>Effective:</strong> ${escapeHtml(license.effectiveDate)}</p>
            <div class="actions">
                <button class="btn btn-view" onclick="viewLicense('${license.id}')">View</button>
                <a href="${encodedPath}" download class="btn btn-download">Download</a>
            </div>
        </div>
    `;
}

function viewLicense(licenseId) {
    const license = licenses.find(l => l.id === licenseId);
    
    if (!license) {
        alert('License not found');
        return;
    }

    const params = new URLSearchParams({
        name: license.name,
        type: license.type,
        file: license.file,
        status: license.status,
        scope: license.scope,
        citationId: license.citationId,
        version: license.version,
        effectiveDate: license.effectiveDate
    });

    window.open(`viewer.html?${params.toString()}`, '_blank');
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

document.addEventListener('DOMContentLoaded', initializeLicenses);
