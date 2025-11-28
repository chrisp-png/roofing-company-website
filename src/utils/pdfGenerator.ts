import { jsPDF } from 'jspdf';

interface EstimateData {
  name: string;
  material: string;
  tier: string;
  roofSize: number;
  complexity: number;
  lowEstimate: number;
  highEstimate: number;
  bestLowEstimate: number;
  bestHighEstimate: number;
  insurance10Year: number;
  insurance20Year: number;
  ventilation10Year: number;
  ventilation20Year: number;
  total20YearSavings: number;
}

export function generateEstimatePDF(data: EstimateData) {
  try {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    let yPos = 20;

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    pdf.setFillColor(220, 38, 38);
    pdf.rect(0, 0, pageWidth, 25, 'F');

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ALL PHASE CONSTRUCTION USA', pageWidth / 2, 12, { align: 'center' });
    pdf.setFontSize(10);
    pdf.text('FL Licenses: CGC1526236 • CCC1331464', pageWidth / 2, 18, { align: 'center' });

    yPos = 35;
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Personalized Roof Estimate', pageWidth / 2, yPos, { align: 'center' });

    yPos += 10;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Prepared for: ${data.name || 'Customer'}`, pageWidth / 2, yPos, { align: 'center' });
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPos + 5, { align: 'center' });

    yPos += 20;
    pdf.setDrawColor(220, 38, 38);
    pdf.setLineWidth(0.5);
    pdf.line(15, yPos, pageWidth - 15, yPos);

    yPos += 10;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(220, 38, 38);
    pdf.text('Recommended System (Better Tier)', 15, yPos);

    yPos += 8;
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');

    const materialLabel = getMaterialLabel(data.material);
    pdf.text(`Roof Type: ${materialLabel}`, 15, yPos);
    yPos += 6;
    pdf.text(`Roof Size: ${data.roofSize.toLocaleString()} sq ft`, 15, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Estimated Range: ${formatCurrency(data.lowEstimate)} - ${formatCurrency(data.highEstimate)}`, 15, yPos);

    yPos += 12;
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(220, 38, 38);
    pdf.text('Upgraded System (Best Tier)', 15, yPos);

    yPos += 8;
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Roof Type: ${materialLabel}`, 15, yPos);
    yPos += 6;
    pdf.text(`Roof Size: ${data.roofSize.toLocaleString()} sq ft`, 15, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Estimated Range: ${formatCurrency(data.bestLowEstimate)} - ${formatCurrency(data.bestHighEstimate)}`, 15, yPos);

    yPos += 15;
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(34, 139, 34);
    pdf.text('Long-Term Savings Potential', 15, yPos);

    yPos += 8;
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Insurance Savings (10 years): ${formatCurrency(data.insurance10Year)}`, 20, yPos);
    yPos += 6;
    pdf.text(`Insurance Savings (20 years): ${formatCurrency(data.insurance20Year)}`, 20, yPos);
    yPos += 6;
    pdf.text(`Ventilation Savings (10 years): ${formatCurrency(data.ventilation10Year)}`, 20, yPos);
    yPos += 6;
    pdf.text(`Ventilation Savings (20 years): ${formatCurrency(data.ventilation20Year)}`, 20, yPos);
    yPos += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Total 20-Year Savings: ${formatCurrency(data.total20YearSavings)}`, 20, yPos);

    yPos += 12;
    const midEstimate = (data.lowEstimate + data.highEstimate) / 2;
    const netCost = Math.max(0, midEstimate - data.total20YearSavings);

    pdf.setFontSize(13);
    pdf.setTextColor(128, 0, 128);
    pdf.text('Net Cost Analysis (20-Year Outlook):', 15, yPos);
    yPos += 7;
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Estimated Roof Cost: ${formatCurrency(midEstimate)}`, 20, yPos);
    yPos += 5;
    pdf.text(`Less: Long-Term Savings: ${formatCurrency(data.total20YearSavings)}`, 20, yPos);
    yPos += 5;
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Approximate Net Cost: ${formatCurrency(netCost)}`, 20, yPos);

    if (netCost === 0) {
      yPos += 5;
      pdf.setTextColor(34, 139, 34);
      pdf.text('Your roof effectively pays for itself over time!', 20, yPos);
      pdf.setTextColor(0, 0, 0);
    }

    yPos += 15;
    pdf.setFillColor(240, 240, 240);
    pdf.rect(15, yPos - 5, pageWidth - 30, 50, 'F');

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.text('IMPORTANT DISCLAIMERS:', 20, yPos);
    yPos += 5;
    pdf.setFont('helvetica', 'normal');

    const disclaimerText = [
      'All pricing shown is preliminary and subject to on-site inspection.',
      'This PDF is for informational purposes only and is not a binding proposal.',
      'Financing examples are estimates only and not loan offers.',
      'All Phase Construction USA is not a lender.',
      'Actual insurance and energy savings vary by carrier, attic conditions, home usage, and other factors.',
      'Final financing terms depend on credit approval, income verification, and lender programs.',
    ];

    disclaimerText.forEach((line) => {
      const splitText = pdf.splitTextToSize(line, pageWidth - 40);
      splitText.forEach((textLine: string) => {
        pdf.text(textLine, 20, yPos);
        yPos += 4;
      });
    });

    const pageHeight = pdf.internal.pageSize.getHeight();
    yPos = pageHeight - 35;
    pdf.setFillColor(220, 38, 38);
    pdf.rect(0, yPos, pageWidth, 35, 'F');

    yPos += 8;
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ALL PHASE CONSTRUCTION USA', pageWidth / 2, yPos, { align: 'center' });
    yPos += 5;
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.text('590 Goolsby Blvd, Deerfield Beach, FL 33442', pageWidth / 2, yPos, { align: 'center' });
    yPos += 4;
    pdf.text('Phone: 754-227-5605 | Email: leads@allphaseusa.com', pageWidth / 2, yPos, { align: 'center' });
    yPos += 4;
    pdf.text('CGC1526236 • CCC1331464', pageWidth / 2, yPos, { align: 'center' });

    const fileName = `Roof-Estimate-${data.name.replace(/\s+/g, '-')}-${new Date().getTime()}.pdf`;
    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again or contact us at 754-227-5605.');
  }
}

function getMaterialLabel(material: string): string {
  const labels: { [key: string]: string } = {
    'shingle': 'Asphalt Shingle',
    'tile': 'Concrete/Clay Tile',
    'metal': 'Metal Roofing',
    'flat': 'Flat/TPO Roof',
  };
  return labels[material] || material;
}
