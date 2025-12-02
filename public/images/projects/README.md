# All Phase Project Photos

## Instructions for Uploading Real Project Photos

This directory contains the project images displayed in the "Real Roofs. Real Neighbors. Real Results." gallery on the homepage.

### Required Images

Please upload **12 high-quality photos** of actual All Phase Construction USA projects:

1. **project-1.jpg** - Tile roof (Boca Raton)
2. **project-2.jpg** - Metal roof (Fort Lauderdale)
3. **project-3.jpg** - Tile roof (Delray Beach)
4. **project-4.jpg** - Shingle roof (Pompano Beach)
5. **project-5.jpg** - Commercial flat roof (Coral Springs)
6. **project-6.jpg** - Shingle roof (Palm Beach County)
7. **project-7.jpg** - Tile roof (Boca Raton)
8. **project-8.jpg** - Tile roof with wind mitigation (Broward County)
9. **project-9.jpg** - Metal roof (Palm Beach County)
10. **project-10.jpg** - Wind mitigation project (Delray Beach)
11. **project-11.jpg** - Commercial TPO roof (Fort Lauderdale)
12. **project-12.jpg** - HOA/multi-family project (Parkland)

### Image Specifications

- **Format:** JPG or JPEG
- **Dimensions:** At least 800px wide (recommended 1200-1600px)
- **Aspect Ratio:** Roughly 4:3 or 16:9 (landscape orientation)
- **File Size:** Optimized for web (200-500KB per image)
- **Quality:** High-resolution, well-lit, professional photos

### Photo Recommendations

**Include a variety of:**
- ✅ Completed roof installations (overhead/aerial views)
- ✅ Before/after comparisons
- ✅ Work in progress shots
- ✅ Different roof types (tile, metal, shingle, flat)
- ✅ Customer photos (optional - if consent obtained)
- ✅ All Phase crews at work (with branded shirts/trucks visible)
- ✅ Florida homes with palm trees (shows local service area)

**Avoid:**
- ❌ Stock photos
- ❌ Competitor logos/branding
- ❌ Poor lighting or blurry images
- ❌ Images without proper rights/permissions

### After Uploading

Once you've uploaded your 12 images:
1. Replace the placeholder files with your actual photos
2. Keep the same filenames (project-1.jpg through project-12.jpg)
3. Run `npm run build` to rebuild the site
4. Verify images display correctly on the homepage

### Customizing Image Assignments

To change which image corresponds to which testimonial, edit:
```
/src/components/home/CustomerGallery.tsx
```

Update the `customerProjects` array and change the `imageUrl` values.

---

**Note:** The gallery component is ready and will automatically use these images once uploaded.
