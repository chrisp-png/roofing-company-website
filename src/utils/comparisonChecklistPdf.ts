import jsPDF from 'jspdf';

export function generateComparisonChecklistPDF() {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = 20;

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Contractor Comparison Checklist', pageWidth / 2, yPos, { align: 'center' });

  yPos += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('All Phase Construction USA', pageWidth / 2, yPos, { align: 'center' });
  yPos += 4;
  doc.text('590 Goolsby Blvd, Deerfield Beach, FL 33442', pageWidth / 2, yPos, { align: 'center' });
  yPos += 4;
  doc.text('754-227-5605 | leads@allphaseusa.com', pageWidth / 2, yPos, { align: 'center' });
  yPos += 4;
  doc.text('Licenses: CGC1526236 • CCC1331464', pageWidth / 2, yPos, { align: 'center' });

  yPos += 12;

  const colWidths = {
    criteria: 80,
    contractorA: 30,
    contractorB: 30,
    allPhase: 40
  };

  const drawTableRow = (criteria: string, contractorA: string, contractorB: string, allPhase: string, isHeader = false) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }

    const rowHeight = 8;
    const startY = yPos;

    if (isHeader) {
      doc.setFillColor(220, 38, 38);
      doc.rect(margin, yPos, contentWidth, rowHeight, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, yPos, contentWidth, rowHeight, 'D');
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
    }

    doc.setFontSize(9);

    const textY = yPos + 5.5;
    doc.text(criteria, margin + 2, textY, { maxWidth: colWidths.criteria - 4 });
    doc.text(contractorA, margin + colWidths.criteria + 2, textY, { maxWidth: colWidths.contractorA - 4 });
    doc.text(contractorB, margin + colWidths.criteria + colWidths.contractorA + 2, textY, { maxWidth: colWidths.contractorB - 4 });
    doc.text(allPhase, margin + colWidths.criteria + colWidths.contractorA + colWidths.contractorB + 2, textY, { maxWidth: colWidths.allPhase - 4 });

    yPos += rowHeight;
    doc.setTextColor(0, 0, 0);
  };

  const drawSectionHeader = (title: string) => {
    if (yPos > 265) {
      doc.addPage();
      yPos = 20;
    }
    yPos += 3;
    doc.setFillColor(64, 64, 64);
    doc.rect(margin, yPos, contentWidth, 7, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(title, margin + 2, yPos + 5);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
  };

  drawTableRow('Criteria', 'Contractor A', 'Contractor B', 'All Phase', true);

  drawSectionHeader('SECTION 1: Licenses & Compliance');
  drawTableRow('Florida Certified Roofing Contractor (CCC License)', '', '', 'YES');
  drawTableRow('Florida Certified General Contractor (CGC License)', '', '', 'YES (Dual Licensed)');
  drawTableRow('Authorized / experienced in HVHZ zones', '', '', 'YES');

  drawSectionHeader('SECTION 2: Insurance & Documentation');
  drawTableRow('Provides wind mitigation report at completion', '', '', 'YES - Included');
  drawTableRow('Liability insurance', '', '', 'YES');
  drawTableRow('Workers comp insurance', '', '', 'YES');
  drawTableRow('Pulls proper permits and closes them', '', '', 'YES');
  drawTableRow('Provides written scope with materials listed', '', '', 'YES');
  drawTableRow('Provides written workmanship & material warranties', '', '', 'YES');

  drawSectionHeader('SECTION 3: Installation Quality & Structural Knowledge');
  drawTableRow('Performs attic inspection (not just exterior)', '', '', 'YES');
  drawTableRow('Recognizes and can correct structural issues', '', '', 'YES');
  drawTableRow('Uses code-compliant underlayments and fastening', '', '', 'YES');
  drawTableRow('Familiar with mechanically seamed metal systems', '', '', 'YES - Recommended');

  drawSectionHeader('SECTION 4: Installation Process Transparency');
  drawTableRow('Shows how the installation process works', '', '', 'YES - Video Provided');
  drawTableRow('Explains what to expect during each stage', '', '', 'YES');
  drawTableRow('Provides sample materials or photos of installs', '', '', 'YES');

  drawSectionHeader('SECTION 5: Equipment & Property Protection');
  drawTableRow('Uses dump trailers instead of stationary dumpsters', '', '', 'YES - Dump Trailers');
  drawTableRow('Provides yard and landscape protection equipment', '', '', 'YES - Protection Setup');
  drawTableRow('Protects driveway from potential dumpster damage', '', '', 'YES');

  drawSectionHeader('SECTION 6: Customer Experience');
  drawTableRow('Dedicated project manager / point of contact', '', '', 'YES');
  drawTableRow('Provides photo or progress updates', '', '', 'YES');
  drawTableRow('Cleans job site daily & at completion', '', '', 'YES');
  drawTableRow('Final walkthrough with the homeowner', '', '', 'YES');
  drawTableRow('Explains financing options clearly', '', '', 'YES');

  drawSectionHeader('SECTION 7: Financial & Value');
  drawTableRow('Offers Good / Better / Best system options', '', '', 'YES');
  drawTableRow('Helps explain insurance savings & mitigation credits', '', '', 'YES');
  drawTableRow('Provides ventilation & energy improvement guidance', '', '', 'YES');
  drawTableRow('Offers long-term financing options', '', '', 'YES');
  drawTableRow('$0 down options may be available', '', '', 'YES (Qualified)');

  yPos += 5;
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFillColor(255, 237, 213);
  doc.rect(margin, yPos, contentWidth, 20, 'F');
  doc.setDrawColor(251, 146, 60);
  doc.rect(margin, yPos, contentWidth, 20, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(194, 65, 12);
  doc.text('Signature Advantage - Wind Mitigation', margin + 2, yPos + 5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  const calloutText = 'All Phase Construction USA provides your wind mitigation report at completion so you can maximize insurance savings immediately. Most contractors do NOT include this.';
  doc.text(calloutText, margin + 2, yPos + 11, { maxWidth: contentWidth - 4 });

  yPos += 25;

  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('Notes & Contractor Impressions', margin, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setDrawColor(200, 200, 200);
  for (let i = 0; i < 8; i++) {
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;
  }

  yPos += 5;
  if (yPos > 260) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  const disclaimer = 'This checklist is provided to help you compare roofing contractors. Always verify licenses and insurance with the proper authorities. All Phase Construction USA is a Florida Certified General Contractor (CGC1526236) and Certified Roofing Contractor (CCC1331464).';
  doc.text(disclaimer, margin, yPos, { maxWidth: contentWidth, align: 'left' });

  doc.save('contractor-comparison-checklist.pdf');
}
