// TODO: Re-enable PDF generation once jsPDF module resolution is fixed

interface EstimateData {
  name?: string;
  material?: string;
  tier?: string;
  roofSize?: number;
  complexity?: number;
  lowEstimate?: number;
  highEstimate?: number;
  bestLowEstimate?: number;
  bestHighEstimate?: number;
  insurance10Year?: number;
  insurance20Year?: number;
  ventilation10Year?: number;
  ventilation20Year?: number;
  total20YearSavings?: number;
}

export function generateEstimatePDF(data: EstimateData) {
  try {
    console.log('PDF generation temporarily disabled. Estimate data:', data);

    // Create a simple text-based summary for now
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    const summaryText = `
ALL PHASE CONSTRUCTION USA
Roof Estimate Summary
FL Licenses: CGC1526236 • CCC1331464

Prepared for: ${data.name || 'Customer'}
Date: ${new Date().toLocaleDateString()}

RECOMMENDED SYSTEM (BETTER TIER)
Estimate Range: ${formatCurrency(data.lowEstimate || 0)} - ${formatCurrency(data.highEstimate || 0)}

UPGRADED SYSTEM (BEST TIER)
Estimate Range: ${formatCurrency(data.bestLowEstimate || 0)} - ${formatCurrency(data.bestHighEstimate || 0)}

LONG-TERM SAVINGS
Insurance Savings (20 years): ${formatCurrency(data.insurance20Year || 0)}
Ventilation Savings (20 years): ${formatCurrency(data.ventilation20Year || 0)}
Total 20-Year Savings: ${formatCurrency(data.total20YearSavings || 0)}

DISCLAIMERS:
- All pricing is preliminary and subject to on-site inspection
- This is for informational purposes only and is not a binding proposal
- All Phase Construction USA is not a lender

Contact: 754-227-5605 | leads@allphaseusa.com
590 Goolsby Blvd, Deerfield Beach, FL 33442
    `.trim();

    // Create a blob and download as text file for now
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Roof-Estimate-${data.name?.replace(/\s+/g, '-') || 'Customer'}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Your estimate has been downloaded as a text file. We are working on PDF generation. For a professional PDF quote, please call us at 754-227-5605.');

  } catch (error) {
    console.error('Error generating estimate file:', error);
    alert('Sorry, there was a problem generating your estimate file. Please contact us at 754-227-5605 and we\'ll email you a detailed quote.');
  }
}
