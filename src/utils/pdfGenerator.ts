import jsPDF from 'jspdf';

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
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;
    let yPos = 20;

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(220, 38, 38);
    doc.text('ALL PHASE CONSTRUCTION USA', pageWidth / 2, yPos, { align: 'center' });

    yPos += 8;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Roof Estimate Summary', pageWidth / 2, yPos, { align: 'center' });

    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('FL Licenses: CGC1526236 • CCC1331464', pageWidth / 2, yPos, { align: 'center' });

    yPos += 12;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`Prepared for: ${data.name || 'Customer'}`, margin, yPos);
    yPos += 6;
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, yPos);

    yPos += 12;
    doc.setFillColor(220, 38, 38);
    doc.rect(margin, yPos, contentWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('RECOMMENDED SYSTEM (BETTER TIER)', margin + 2, yPos + 5.5);

    yPos += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Estimate Range: ${formatCurrency(data.lowEstimate || 0)} - ${formatCurrency(data.highEstimate || 0)}`, margin + 2, yPos);

    yPos += 12;
    doc.setFillColor(251, 146, 60);
    doc.rect(margin, yPos, contentWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('UPGRADED SYSTEM (BEST TIER)', margin + 2, yPos + 5.5);

    yPos += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Estimate Range: ${formatCurrency(data.bestLowEstimate || 0)} - ${formatCurrency(data.bestHighEstimate || 0)}`, margin + 2, yPos);

    yPos += 15;
    doc.setFillColor(34, 197, 94);
    doc.rect(margin, yPos, contentWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('LONG-TERM SAVINGS POTENTIAL', margin + 2, yPos + 5.5);

    yPos += 10;
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Insurance Savings (20 years): ${formatCurrency(data.insurance20Year || 0)}`, margin + 2, yPos);
    yPos += 6;
    doc.text(`Ventilation Savings (20 years): ${formatCurrency(data.ventilation20Year || 0)}`, margin + 2, yPos);
    yPos += 6;
    doc.setFont('helvetica', 'bold');
    doc.text(`Total 20-Year Savings: ${formatCurrency(data.total20YearSavings || 0)}`, margin + 2, yPos);

    yPos += 15;
    doc.setFillColor(250, 204, 21);
    doc.rect(margin, yPos, contentWidth, 40, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('IMPORTANT DISCLAIMERS', margin + 2, yPos + 5);

    yPos += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const disclaimers = [
      '• All pricing is preliminary and subject to on-site inspection',
      '• This is for informational purposes only and is not a binding proposal',
      '• Final project cost may vary based on inspection findings',
      '• All Phase Construction USA is not a lender',
      '• Financing subject to credit approval through third-party lenders'
    ];

    disclaimers.forEach((line) => {
      doc.text(line, margin + 4, yPos);
      yPos += 5;
    });

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Contact Us:', margin, yPos);
    yPos += 6;
    doc.setFont('helvetica', 'normal');
    doc.text('Phone: 754-227-5605', margin, yPos);
    yPos += 5;
    doc.text('Email: leads@allphaseusa.com', margin, yPos);
    yPos += 5;
    doc.text('Address: 590 Goolsby Blvd, Deerfield Beach, FL 33442', margin, yPos);

    doc.save(`Roof-Estimate-${data.name?.replace(/\s+/g, '-') || 'Customer'}.pdf`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Sorry, there was a problem generating your PDF. Please contact us at 754-227-5605 and we\'ll email you a detailed quote.');
  }
}
