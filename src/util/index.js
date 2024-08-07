const mockData = {
  fabricInfoOptions: [
    {
      fabricDesignCategory: "Product Design",
      fabricCraftingDescription:
        "Whether custom or pre-made, we assist in crafting fabrics tailored to  elevate your next seasonal collection's style & performance.",
    },
    {
      fabricDesignCategory: "Manufacturing",
      fabricCraftingDescription:
        "We work with modern manufacturing partners in Taiwan who allow us to scale production to meet orders both big & small.",
    },
    {
      fabricDesignCategory: "Quality Control",
      fabricCraftingDescription:
        "By implementing textile testing & quality control measures, we ensure a production defective rate below 10% & prompt delivery.",
    },
  ],
  possibleSectionTitles: [
    { sectionTitleOrLabel: "History" },
    { sectionTitleOrLabel: "Favourite" },
    { sectionTitleOrLabel: "Logout" },
  ],
  productDisplayWidgetOptions: [
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_2" data-node-id="1091:4011" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_5" data-node-id="1091:4012" d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z" fill="currentColor"/>\n<path id="Vector 1" data-node-id="1091:4013" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.333 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3989_6f61a8.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3999_8b011a.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_5" data-node-id="1091:4089" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_17" data-node-id="1091:4090" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_4" data-node-id="1091:4091" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4067_8167bb.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4077_4acdaf.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_8" data-node-id="1091:4167" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_29" data-node-id="1091:4168" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_7" data-node-id="1091:4169" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4145_25b329.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4155_c6f888.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_11" data-node-id="1091:4230" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_41" data-node-id="1091:4231" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_10" data-node-id="1091:4232" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4213_8367a8.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4218_887c2e.svg",
    },
  ],
  productDisplayWidgetOptions1: [
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_3" data-node-id="1091:4037" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_9" data-node-id="1091:4038" d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z" fill="currentColor"/>\n<path id="Vector 1_2" data-node-id="1091:4039" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.333 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4015_16bc1e.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4025_26c7ab.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_6" data-node-id="1091:4115" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_21" data-node-id="1091:4116" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_5" data-node-id="1091:4117" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4093_5e595d.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4103_25fcdf.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_9" data-node-id="1091:4188" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_33" data-node-id="1091:4189" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_8" data-node-id="1091:4190" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4171_748833.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4176_2b8879.svg",
    },
  ],
  productDisplayWidgetArgs: [
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_4" data-node-id="1091:4063" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_13" data-node-id="1091:4064" d="M16.14,24.7654l-0.14,0.138l-0.15,-0.138c-6.53,-5.926 -10.85,-9.845 -10.85,-13.819c0,-2.75 2.06,-4.812 4.81,-4.812c2.12,0 4.18,1.375 4.91,3.245h2.56c0.73,-1.87 2.79,-3.245 4.91,-3.245c2.75,0 4.81,2.062 4.81,4.812c0,3.974 -4.32,7.893 -10.86,13.819zM22.19,3.3844c-2.39,0 -4.69,1.114 -6.19,2.86c-1.5,-1.746 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.314 -7.56,7.562c0,5.184 4.68,9.433 11.76,15.854l1.99,1.815l1.99,-1.815c7.09,-6.421 11.76,-10.67 11.76,-15.854c0,-4.248 -3.33,-7.562 -7.56,-7.562z" fill="currentColor"/>\n<path id="Vector 1_3" data-node-id="1091:4065" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.333 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4041_33ec44.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4051_a6d8e7.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_7" data-node-id="1091:4141" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_25" data-node-id="1091:4142" d="M16.14,24.7644l-0.14,0.14l-0.15,-0.14c-6.53,-5.93 -10.85,-9.84 -10.85,-13.82c0,-2.75 2.06,-4.81 4.81,-4.81c2.12,0 4.18,1.38 4.91,3.25h2.56c0.73,-1.87 2.79,-3.25 4.91,-3.25c2.75,0 4.81,2.06 4.81,4.81c0,3.98 -4.32,7.89 -10.86,13.82zM22.19,3.3844c-2.39,0 -4.69,1.11 -6.19,2.86c-1.5,-1.75 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.31 -7.56,7.56c0,5.19 4.68,9.44 11.76,15.86l1.99,1.81l1.99,-1.81c7.09,-6.42 11.76,-10.67 11.76,-15.86c0,-4.25 -3.33,-7.56 -7.56,-7.56z" fill="currentColor"/>\n<path id="Vector 1_6" data-node-id="1091:4143" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4119_f7dd66.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4129_882779.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_10" data-node-id="1091:4209" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_37" data-node-id="1091:4210" d="M16.14,24.7644l-0.14,0.14l-0.15,-0.14c-6.53,-5.93 -10.85,-9.84 -10.85,-13.82c0,-2.75 2.06,-4.81 4.81,-4.81c2.12,0 4.18,1.38 4.91,3.25h2.56c0.73,-1.87 2.79,-3.25 4.91,-3.25c2.75,0 4.81,2.06 4.81,4.81c0,3.98 -4.32,7.89 -10.86,13.82zM22.19,3.3844c-2.39,0 -4.69,1.11 -6.19,2.86c-1.5,-1.75 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.31 -7.56,7.56c0,5.19 4.68,9.44 11.76,15.86l1.99,1.81l1.99,-1.81c7.09,-6.42 11.76,-10.67 11.76,-15.86c0,-4.25 -3.33,-7.56 -7.56,-7.56z" fill="currentColor"/>\n<path id="Vector 1_9" data-node-id="1091:4211" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4192_a62a03.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4197_2c1494.svg",
    },
  ],
  generateContentDisplayWidgetArgs: [
    {
      techCategory1: "Tech",
      categoryLabel3: "Tech",
      categoryLabel1: "Tech",
      publicationDate5: "Sun Nov 05 2023",
      publicationDate2: "Sun Nov 05 2023",
      publicationDate3: "Sun Nov 05 2023",
      authorInfo1: "C&ice Fisher",
      authorName1: "C&ice Fisher",
      authorNameWidget1: "C&ice Fisher",
      cardSubtitle1: "excepturi quis laudantium",
      contentSubtitle3: "excepturi quis laudantium",
      contentSubtitle1: "excepturi quis laudantium",
      excerptLoremText1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet3:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      imgContent10:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8917_40803b.svg",
      imgContent12:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8930_3a3766.svg",
      imgContent14:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8943_b1d92f.svg",
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9018_87271a.webp",
      imgContent13:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9005_fdff3a.webp",
      imgContent11:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9018_87271a.webp",
      imgContent6:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8907_303acd.webp",
      imgContent7:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8920_7b77a5.webp",
      imgContent8:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8933_dd24dc.webp",
    },
    {
      techCategory1: "Tech",
      categoryLabel3: "Tech",
      categoryLabel1: "Tech",
      publicationDate5: "Sun Nov 05 2023",
      publicationDate2: "Sun Nov 05 2023",
      publicationDate3: "Sun Nov 05 2023",
      authorInfo1: "C&ice Fisher",
      authorName1: "C&ice Fisher",
      authorNameWidget1: "C&ice Fisher",
      cardSubtitle1: "excepturi quis laudantium",
      contentSubtitle3: "excepturi quis laudantium",
      contentSubtitle1: "excepturi quis laudantium",
      excerptLoremText1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet3:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      imgContent10:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8956_297af9.svg",
      imgContent12:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8969_a11cc2.svg",
      imgContent14:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8982_dca269.svg",
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9005_fdff3a.webp",
      imgContent11:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9018_87271a.webp",
      imgContent13:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9005_fdff3a.webp",
      imgContent6:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8946_8c6ab4.webp",
      imgContent7:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8959_240124.webp",
      imgContent8:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8972_3e61f0.webp",
    },
    {
      techCategory1: "Tech",
      categoryLabel3: "Tech",
      categoryLabel1: "Tech",
      publicationDate5: "Sun Nov 05 2023",
      publicationDate2: "Sun Nov 05 2023",
      publicationDate3: "Sun Nov 05 2023",
      authorInfo1: "C&ice Fisher",
      authorName1: "C&ice Fisher",
      authorNameWidget1: "C&ice Fisher",
      cardSubtitle1: "excepturi quis laudantium",
      contentSubtitle3: "excepturi quis laudantium",
      contentSubtitle1: "excepturi quis laudantium",
      excerptLoremText1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet3:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      dynamicContentSnippet1:
        "Lörem ipsum tis kvasiposade: poment vätirade ding, eftersom galna chips-sjukan tegen, numun, jykalig. Tektiga mobilmissbruk",
      imgContent10:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8995_544432.svg",
      imgContent12:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9008_dedc96.svg",
      imgContent14:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9021_1a623d.svg",
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9005_fdff3a.webp",
      imgContent11:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9005_fdff3a.webp",
      imgContent13:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9018_87271a.webp",
      imgContent6:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8985_8d1df5.webp",
      imgContent7:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8998_eea642.webp",
      imgContent8:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_9011_252dd4.webp",
    },
  ],
  eventDisplayWidgetArgs: [
    {
      eventYear5: "2024",
      eventDate5: "25 NOV",
      eventDescription7: "nulla maxime voluptatem",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8740_5e534f.webp",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8766_dd24db.webp",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8792_50fc66.webp",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8818_3fb63a.webp",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_8844_8e01e9.webp",
    },
  ],
  contactOptionsArray: [
    {
      contactMethodText: "Phone call",
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Phone" data-node-id="1135:5528" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_2" data-node-id="I1135:5528;1022:13791" d="M10.8008,16.8c-0.3183,0 -0.6235,0.126 -0.8485,0.351c-0.2251,0.226 -0.3515,0.531 -0.3515,0.849c0,0.318 0.1264,0.623 0.3515,0.849c0.225,0.225 0.5302,0.351 0.8485,0.351h2.4c0.3182,0 0.6235,-0.126 0.8485,-0.351c0.2251,-0.226 0.3515,-0.531 0.3515,-0.849c0,-0.318 -0.1264,-0.623 -0.3515,-0.849c-0.225,-0.225 -0.5303,-0.351 -0.8485,-0.351zM8.4008,0c-0.9548,0 -1.8705,0.379 -2.5456,1.054c-0.6751,0.676 -1.0544,1.591 -1.0544,2.546v16.8c0,0.955 0.3793,1.87 1.0544,2.546c0.6751,0.675 1.5908,1.054 2.5456,1.054h7.2c0.9548,0 1.8704,-0.379 2.5456,-1.054c0.6751,-0.676 1.0544,-1.591 1.0544,-2.546v-16.8c0,-0.955 -0.3793,-1.87 -1.0544,-2.546c-0.6752,-0.675 -1.5908,-1.054 -2.5456,-1.054zM7.2008,3.6c0,-0.318 0.1264,-0.623 0.3515,-0.849c0.225,-0.225 0.5302,-0.351 0.8485,-0.351h7.2c0.3182,0 0.6235,0.126 0.8485,0.351c0.2251,0.226 0.3515,0.531 0.3515,0.849v16.8c0,0.318 -0.1264,0.623 -0.3515,0.849c-0.225,0.225 -0.5303,0.351 -0.8485,0.351h-7.2c-0.3183,0 -0.6235,-0.126 -0.8485,-0.351c-0.2251,-0.226 -0.3515,-0.531 -0.3515,-0.849z" fill="black"/>\n</g></svg>',
    },
    {
      contactMethodText: "Email",
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="email" data-node-id="1135:5531" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_3" data-node-id="I1135:5531;992:106" d="M24,4.5c0,-1.375 -1.08,-2.5 -2.4,-2.5h-19.2c-1.32,0 -2.4,1.125 -2.4,2.5v15c0,1.375 1.08,2.5 2.4,2.5h19.2c1.32,0 2.4,-1.125 2.4,-2.5zM21.6,4.5l-9.6,6.25l-9.6,-6.25zM21.6,19.5h-19.2v-12.5l9.6,6.25l9.6,-6.25z" fill="black"/>\n</g></svg>',
    },
    {
      contactMethodText: "Whatsapp",
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="clip0_1135_5521" xmlns="http://www.w3.org/2000/svg">\n<rect width="24" height="24" fill="white" transform="translate(0, 0)"/>\n</clipPath></defs><g id="Whatsapp" data-node-id="1135:5534" clip-path="url(#clip0_1135_5521)" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_4" data-node-id="I1135:5534;1022:13789" d="M12,0c6.6276,0 12,5.372 12,12c0,6.628 -5.3724,12 -12,12c-2.0424,0.003 -4.0516,-0.518 -5.8356,-1.512l-0.366,-0.214l-3.6384,1.071c-0.198,0.058 -0.4076,0.065 -0.609,0.02c-0.2013,-0.046 -0.3878,-0.142 -0.5416,-0.279c-0.1539,-0.138 -0.27,-0.313 -0.3375,-0.508c-0.0674,-0.195 -0.0839,-0.404 -0.0479,-0.607l0.0312,-0.131l1.0704,-3.638c-1.1316,-1.871 -1.7285,-4.016 -1.7256,-6.202c0,-6.628 5.3724,-12 12,-12zM12,2.4c-1.7188,0 -3.4062,0.461 -4.886,1.335c-1.4797,0.875 -2.6976,2.131 -3.5263,3.637c-0.8287,1.505 -1.2379,3.206 -1.1849,4.924c0.0531,1.718 0.5664,3.39 1.4864,4.842c0.2376,0.375 0.3396,0.836 0.2592,1.293l-0.0468,0.195l-0.5292,1.802l1.8012,-0.53c0.5196,-0.153 1.0596,-0.06 1.488,0.213c1.258,0.796 2.684,1.289 4.1654,1.44c1.4813,0.15 2.9774,-0.046 4.3699,-0.573c1.3924,-0.527 2.6432,-1.371 3.6533,-2.465c1.0101,-1.094 1.752,-2.408 2.1669,-3.838c0.4148,-1.43 0.4914,-2.937 0.2236,-4.402c-0.2678,-1.464 -0.8727,-2.847 -1.7667,-4.037c-0.8941,-1.191 -2.0528,-2.157 -3.3847,-2.823c-1.3319,-0.666 -2.8003,-1.013 -4.2893,-1.013zM8.5224,6.221c0.1329,-0.058 0.2784,-0.08 0.4223,-0.064c0.1439,0.016 0.2813,0.069 0.3985,0.154c0.6048,0.441 1.0848,1.034 1.4976,1.613l0.3924,0.568l0.1836,0.27c0.1059,0.155 0.1579,0.341 0.148,0.528c-0.01,0.188 -0.0814,0.366 -0.2032,0.509l-0.09,0.091l-1.1088,0.824c-0.0534,0.038 -0.0909,0.095 -0.1057,0.159c-0.0148,0.064 -0.0058,0.132 0.0253,0.19c0.252,0.456 0.6972,1.136 1.2084,1.647c0.5124,0.512 1.224,0.987 1.7112,1.266c0.1056,0.06 0.2328,0.041 0.3192,-0.037l0.0456,-0.054l0.7212,-1.098c0.1324,-0.176 0.3279,-0.294 0.5456,-0.33c0.2177,-0.035 0.4406,0.015 0.622,0.141l0.6516,0.454c0.648,0.462 1.2708,0.959 1.764,1.589c0.0917,0.118 0.15,0.259 0.1688,0.407c0.0188,0.149 -0.0026,0.299 -0.062,0.437c-0.4752,1.109 -1.6788,2.053 -2.9292,2.007l-0.1908,-0.012l-0.2292,-0.021c-0.0433,-0.005 -0.0865,-0.011 -0.1296,-0.017l-0.2856,-0.048c-1.1088,-0.209 -2.886,-0.838 -4.728,-2.678c-1.8408,-1.842 -2.4696,-3.62 -2.6784,-4.728l-0.048,-0.286l-0.03,-0.25l-0.0156,-0.21c-0.0019,-0.03 -0.0035,-0.06 -0.0048,-0.09c-0.0456,-1.252 0.9036,-2.456 2.0136,-2.931z" fill="black"/>\n</g></svg>',
    },
    {
      contactMethodText: "Line",
      htmlContent1:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="clip1_1135_5521" xmlns="http://www.w3.org/2000/svg">\n<rect width="24" height="24" fill="white" transform="translate(0, 0)"/>\n</clipPath><clipPath id="clip2_1135_5521" xmlns="http://www.w3.org/2000/svg">\n<rect width="24" height="24" fill="white" transform="translate(0, 0)"/>\n</clipPath></defs><g id="Line" data-node-id="1135:5537" clip-path="url(#clip1_1135_5521)" xmlns="http://www.w3.org/2000/svg">\n<g id="hugeicons:line" data-node-id="I1135:5537;1022:13794" clip-path="url(#clip2_1135_5521)">\n<path id="Vector_5" data-node-id="I1135:5537;1022:13805" fill-rule="evenodd" clip-rule="evenodd" d="M12,0c-6.4949,0 -12,4.501 -12,10.326c0,5.824 5.5051,10.325 12,10.325h0.0008c0.4717,0 0.9366,-0.023 1.3945,-0.068v2.58c0,0.337 0.2021,0.641 0.5128,0.772c0.3106,0.13 0.6693,0.062 0.9102,-0.174c1.8641,-1.825 5.0554,-5.054 7.051,-7.557c1.3352,-1.658 2.1307,-3.683 2.1307,-5.878c0,-5.825 -5.5051,-10.326 -12,-10.326zM1.6744,10.326c0,-4.655 4.4901,-8.652 10.3256,-8.652c5.8355,0 10.3256,3.997 10.3256,8.652c0,1.778 -0.6418,3.44 -1.7615,4.829l-0.0028,0.004c-1.4914,1.871 -3.7038,4.193 -5.4915,5.993v-1.528c0,-0.247 -0.1093,-0.482 -0.2984,-0.641c-0.1892,-0.159 -0.439,-0.226 -0.6825,-0.184c-0.6726,0.118 -1.3689,0.177 -2.0897,0.178c-5.8352,-0.001 -10.3248,-3.997 -10.3248,-8.651zM11.7133,7.662c-0.1937,-0.322 -0.5788,-0.476 -0.9414,-0.376c-0.3627,0.101 -0.6138,0.431 -0.6138,0.807v4.465c0,0.463 0.3749,0.837 0.8372,0.837c0.4624,0 0.8373,-0.374 0.8373,-0.837v-1.442l1.1239,1.873c0.1936,0.323 0.5787,0.476 0.9414,0.376c0.3627,-0.1 0.6137,-0.431 0.6137,-0.807v-4.465c0,-0.462 -0.3748,-0.837 -0.8372,-0.837c-0.4624,0 -0.8372,0.375 -0.8372,0.837v1.443zM6.1395,8.093c0,-0.462 -0.3748,-0.837 -0.8372,-0.837c-0.4624,0 -0.8372,0.375 -0.8372,0.837v4.465c0,0.463 0.3748,0.837 0.8372,0.837h1.1163c0.4624,0 0.8372,-0.374 0.8372,-0.837c0,-0.462 -0.3748,-0.837 -0.8372,-0.837h-0.2791zM9.4884,8.093c0,-0.462 -0.3749,-0.837 -0.8372,-0.837c-0.4624,0 -0.8372,0.375 -0.8372,0.837v4.465c0,0.463 0.3748,0.837 0.8372,0.837c0.4623,0 0.8372,-0.374 0.8372,-0.837zM16.0186,7.256c-0.4624,0 -0.8372,0.375 -0.8372,0.837v4.465c0,0.463 0.3748,0.837 0.8372,0.837h2.1209c0.4624,0 0.8372,-0.374 0.8372,-0.837c0,-0.462 -0.3748,-0.837 -0.8372,-0.837h-1.2837v-0.558h0.7702c0.4624,0 0.8373,-0.375 0.8373,-0.837c0,-0.463 -0.3749,-0.838 -0.8373,-0.838h-0.7702v-0.558h1.2837c0.4624,0 0.8372,-0.375 0.8372,-0.837c0,-0.462 -0.3748,-0.837 -0.8372,-0.837z" fill="black"/>\n</g>\n</g></svg>',
    },
  ],
  ticketInquiriesData: [
    {
      date1: "Sat Nov 23 2023",
      ticketType1: "Ticket Number : AB9825",
      inquiryTitle2: "Placeat voluptas eius non iusto vitae. ",
      requestDescription2:
        "Labore ut molestias asperiores nihil reiciendis debitis qui distinctio modi. Ea ab beatae nisi unde molestias. Distinctio omnis non et officiis deserunt possimus aspernatur. Sit molestiae deleniti culpa nemo placeat nesciunt. Ipsum esse quia. Ut deserunt consequatur at.Voluptatem nostrum non ea voluptatem repellat. Consectetur tenetur qui voluptatem tempora quam. Provident quam dignissimos voluptatum corrupti quisquam rerum. Optio quae maxime modi laudantium nam molestias.Qui rem aliquid dolores fugit laudantium natus ea qui eos. Eos qui fugit. Nobis alias quam libero nesciunt aut.",
    },
    {
      date1: "Sat Nov 23 2023",
      ticketType1: "Ticket Number : AB9825",
      inquiryTitle2: "Placeat voluptas eius non iusto vitae. ",
      requestDescription2:
        "Labore ut molestias asperiores nihil reiciendis debitis qui distinctio modi. Ea ab beatae nisi unde molestias. Distinctio omnis non et officiis deserunt possimus aspernatur. Sit molestiae deleniti culpa nemo placeat nesciunt. Ipsum esse quia. Ut deserunt consequatur at.Voluptatem nostrum non ea voluptatem repellat. Consectetur tenetur qui voluptatem tempora quam. Provident quam dignissimos voluptatum corrupti quisquam rerum. Optio quae maxime modi laudantium nam molestias.Qui rem aliquid dolores fugit laudantium natus ea qui eos. Eos qui fugit. Nobis alias quam libero nesciunt aut.",
    },
  ],
  productDetailsRendererArgsList: [
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2838_9df264.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2826_49a129.webp",
    },
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2859_d41d8a.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2847_ca24d8.webp",
    },
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2880_443c9a.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2868_322998.webp",
    },
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2901_f03306.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2889_89b193.webp",
    },
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2922_bdf3d2.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2910_67b0a3.webp",
    },
    {
      productQuantityWidget: "100",
      renderProductDetailsSection: "Color",
      renderProductDetailsWidget: "AB10476",
      renderProductDetailsWidget1: "Quantity",
      renderType: "Functional",
      lengthUnitDescription: "(by meter)",
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2943_bdd036.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2931_97e43b.webp",
    },
  ],
  productCardViewArguments: [
    {
      productHighlightText: "Best Selling",
      brProductDescriptionComponentTitle:
        "Lorem ipsum dolor sit amet consectetur elit",
      renderSvgOrText: undefined,
      dynamicIconEmoji: "🔥",
    },
    {
      productHighlightText: "Material",
      brProductDescriptionComponentTitle:
        "Lorem ipsum dolor sit amet consectetur elit",
      renderSvgOrText:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Chevron Down" data-node-id="1091:3536" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_4" data-node-id="1091:3537" fill-rule="evenodd" clip-rule="evenodd" d="M15.398,11.867c0.219,0.22 0.219,0.576 0,0.796l-5.735,5.735c-0.22,0.219 -0.576,0.219 -0.796,0l-0.265,-0.265c-0.219,-0.22 -0.219,-0.576 0,-0.796l5.072,-5.072l-5.072,-5.072c-0.219,-0.219 -0.219,-0.576 0,-0.795l0.265,-0.265c0.22,-0.22 0.576,-0.22 0.796,0z" fill="black"/>\n</g></svg>',
      dynamicIconEmoji: undefined,
    },
    {
      productHighlightText: "Woven",
      brProductDescriptionComponentTitle:
        "Lorem ipsum dolor sit amet consectetur elit",
      renderSvgOrText:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Chevron Down_2" data-node-id="1091:3542" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_5" data-node-id="1091:3543" fill-rule="evenodd" clip-rule="evenodd" d="M15.398,11.867c0.219,0.22 0.219,0.576 0,0.796l-5.735,5.735c-0.22,0.219 -0.576,0.219 -0.796,0l-0.265,-0.265c-0.219,-0.22 -0.219,-0.576 0,-0.796l5.072,-5.072l-5.072,-5.072c-0.219,-0.219 -0.219,-0.576 0,-0.795l0.265,-0.265c0.22,-0.22 0.576,-0.22 0.796,0z" fill="black"/>\n</g></svg>',
      dynamicIconEmoji: undefined,
    },
    {
      productHighlightText: "Functional",
      brProductDescriptionComponentTitle:
        "Lorem ipsum dolor sit amet consectetur elit",
      renderSvgOrText:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Chevron Down_3" data-node-id="1091:3548" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_6" data-node-id="1091:3549" fill-rule="evenodd" clip-rule="evenodd" d="M15.398,11.867c0.219,0.22 0.219,0.576 0,0.796l-5.735,5.735c-0.22,0.219 -0.576,0.219 -0.796,0l-0.265,-0.265c-0.219,-0.22 -0.219,-0.576 0,-0.796l5.072,-5.072l-5.072,-5.072c-0.219,-0.219 -0.219,-0.576 0,-0.795l0.265,-0.265c0.22,-0.22 0.576,-0.22 0.796,0z" fill="black"/>\n</g></svg>',
      dynamicIconEmoji: undefined,
    },
    {
      productHighlightText: "Sustainable",
      brProductDescriptionComponentTitle:
        "Lorem ipsum dolor sit amet consectetur elit",
      renderSvgOrText:
        '<svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Chevron Down_4" data-node-id="1091:3554" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_7" data-node-id="1091:3555" fill-rule="evenodd" clip-rule="evenodd" d="M15.398,11.867c0.219,0.22 0.219,0.576 0,0.796l-5.735,5.735c-0.22,0.219 -0.576,0.219 -0.796,0l-0.265,-0.265c-0.219,-0.22 -0.219,-0.576 0,-0.796l5.072,-5.072l-5.072,-5.072c-0.219,-0.219 -0.219,-0.576 0,-0.795l0.265,-0.265c0.22,-0.22 0.576,-0.22 0.796,0z" fill="black"/>\n</g></svg>',
      dynamicIconEmoji: undefined,
    },
  ],
  imageOptionsList: [
    {
      colorOption1: "Red",
      colorOption3: "Green",
      imgContent2:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4712_78da9e.svg",
      imgContent3:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4716_6912be.svg",
    },
    {
      colorOption3: "Blue",
      colorOption1: "Black",
      imgContent2:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4721_6eef5e.svg",
      imgContent3:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4725_8bd834.svg",
    },
    {
      colorOption1: "White",
      colorOption3: "Purple",
      imgContent2:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4730_5de029.svg",
      imgContent3:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4734_bc1e60.svg",
    },
    {
      colorOption3: "Pink",
      colorOption1: "Orange",
      imgContent2:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4739_e7087d.svg",
      imgContent3:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4743_75b8ca.svg",
    },
  ],
  productTableRowsData: [
    {
      metricValueIdentifier1: "100m",
      productIdentifier1: "1a7708",
      productFunctionalityDescription1: "Functional -> Stretch",
      htmlContent4:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 183" data-node-id="1091:4937" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="-" data-node-id="1091:4938" d="M20.414,15.103v1.795h-8.826v-1.795z" fill="white"/>\n</g></svg>',
      htmlContent7:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 182" data-node-id="1091:4941" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="+" data-node-id="1091:4942" d="M15.364,19.75v-7.5h1.272v7.5zM12.25,16.636v-1.272h7.5v1.272z" fill="white"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4971_5ae4a4.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4905_a29442.webp",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_4" data-node-id="1091:4910" d="M29.2,5.818h-5.4v-1.745c0,-1.08 -0.442,-2.116 -1.23,-2.88c-0.788,-0.764 -1.856,-1.193 -2.97,-1.193h-7.2c-1.114,0 -2.182,0.429 -2.97,1.193c-0.788,0.764 -1.23,1.8 -1.23,2.88v1.745h-5.4c-0.477,0 -0.935,0.184 -1.273,0.511c-0.337,0.328 -0.527,0.772 -0.527,1.235c0,0.463 0.19,0.907 0.527,1.234c0.338,0.327 0.796,0.511 1.273,0.511h0.6v19.782c0,0.771 0.316,1.511 0.879,2.057c0.562,0.546 1.325,0.852 2.121,0.852h19.2c0.796,0 1.559,-0.306 2.121,-0.852c0.563,-0.546 0.879,-1.286 0.879,-2.057v-19.782h0.6c0.477,0 0.935,-0.184 1.273,-0.511c0.337,-0.327 0.527,-0.771 0.527,-1.234c0,-0.463 -0.19,-0.907 -0.527,-1.235c-0.338,-0.327 -0.796,-0.511 -1.273,-0.511zM11.8,4.073c0,-0.155 0.063,-0.303 0.176,-0.412c0.112,-0.109 0.265,-0.17 0.424,-0.17h7.2c0.159,0 0.312,0.061 0.424,0.17c0.113,0.109 0.176,0.257 0.176,0.412v1.745h-8.4zM25,28.509h-18v-19.2h18zM14.2,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235zM21.4,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235z" fill="currentColor" xmlns="http://www.w3.org/2000/svg"/></svg>',
    },
    {
      metricValueIdentifier1: "100m",
      productIdentifier1: "1a7708",
      productFunctionalityDescription1: "Functional -> Stretch",
      htmlContent4:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 183_2" data-node-id="1091:4945" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="-_2" data-node-id="1091:4946" d="M20.414,15.103v1.795h-8.826v-1.795z" fill="white"/>\n</g></svg>',
      htmlContent7:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 182_2" data-node-id="1091:4949" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="+_2" data-node-id="1091:4950" d="M15.364,19.75v-7.5h1.272v7.5zM12.25,16.636v-1.272h7.5v1.272z" fill="white"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4977_d96d9f.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4912_e597f7.webp",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_5" data-node-id="1091:4917" d="M29.2,5.818h-5.4v-1.745c0,-1.08 -0.442,-2.116 -1.23,-2.88c-0.788,-0.764 -1.856,-1.193 -2.97,-1.193h-7.2c-1.114,0 -2.182,0.429 -2.97,1.193c-0.788,0.764 -1.23,1.8 -1.23,2.88v1.745h-5.4c-0.477,0 -0.935,0.184 -1.273,0.511c-0.337,0.328 -0.527,0.772 -0.527,1.235c0,0.463 0.19,0.907 0.527,1.234c0.338,0.327 0.796,0.511 1.273,0.511h0.6v19.782c0,0.771 0.316,1.511 0.879,2.057c0.562,0.546 1.325,0.852 2.121,0.852h19.2c0.796,0 1.559,-0.306 2.121,-0.852c0.563,-0.546 0.879,-1.286 0.879,-2.057v-19.782h0.6c0.477,0 0.935,-0.184 1.273,-0.511c0.337,-0.327 0.527,-0.771 0.527,-1.234c0,-0.463 -0.19,-0.907 -0.527,-1.235c-0.338,-0.327 -0.796,-0.511 -1.273,-0.511zM11.8,4.073c0,-0.155 0.063,-0.303 0.176,-0.412c0.112,-0.109 0.265,-0.17 0.424,-0.17h7.2c0.159,0 0.312,0.061 0.424,0.17c0.113,0.109 0.176,0.257 0.176,0.412v1.745h-8.4zM25,28.509h-18v-19.2h18zM14.2,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235zM21.4,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235z" fill="currentColor" xmlns="http://www.w3.org/2000/svg"/></svg>',
    },
    {
      metricValueIdentifier1: "100m",
      productIdentifier1: "1a7708",
      productFunctionalityDescription1: "Functional -> Stretch",
      htmlContent4:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 183_3" data-node-id="1091:4953" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="-_3" data-node-id="1091:4954" d="M20.414,15.103v1.795h-8.826v-1.795z" fill="white"/>\n</g></svg>',
      htmlContent7:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 182_3" data-node-id="1091:4957" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="+_3" data-node-id="1091:4958" d="M15.364,19.75v-7.5h1.272v7.5zM12.25,16.636v-1.272h7.5v1.272z" fill="white"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4983_20756e.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4919_2fd614.webp",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_6" data-node-id="1091:4924" d="M29.2,5.818h-5.4v-1.745c0,-1.08 -0.442,-2.116 -1.23,-2.88c-0.788,-0.764 -1.856,-1.193 -2.97,-1.193h-7.2c-1.114,0 -2.182,0.429 -2.97,1.193c-0.788,0.764 -1.23,1.8 -1.23,2.88v1.745h-5.4c-0.477,0 -0.935,0.184 -1.273,0.511c-0.337,0.328 -0.527,0.772 -0.527,1.235c0,0.463 0.19,0.907 0.527,1.234c0.338,0.327 0.796,0.511 1.273,0.511h0.6v19.782c0,0.771 0.316,1.511 0.879,2.057c0.562,0.546 1.325,0.852 2.121,0.852h19.2c0.796,0 1.559,-0.306 2.121,-0.852c0.563,-0.546 0.879,-1.286 0.879,-2.057v-19.782h0.6c0.477,0 0.935,-0.184 1.273,-0.511c0.337,-0.327 0.527,-0.771 0.527,-1.234c0,-0.463 -0.19,-0.907 -0.527,-1.235c-0.338,-0.327 -0.796,-0.511 -1.273,-0.511zM11.8,4.073c0,-0.155 0.063,-0.303 0.176,-0.412c0.112,-0.109 0.265,-0.17 0.424,-0.17h7.2c0.159,0 0.312,0.061 0.424,0.17c0.113,0.109 0.176,0.257 0.176,0.412v1.745h-8.4zM25,28.509h-18v-19.2h18zM14.2,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235zM21.4,13.964v9.309c0,0.463 -0.19,0.907 -0.527,1.234c-0.338,0.327 -0.796,0.511 -1.273,0.511c-0.477,0 -0.935,-0.184 -1.273,-0.511c-0.337,-0.327 -0.527,-0.771 -0.527,-1.234v-9.309c0,-0.463 0.19,-0.907 0.527,-1.235c0.338,-0.327 0.796,-0.511 1.273,-0.511c0.477,0 0.935,0.184 1.273,0.511c0.337,0.328 0.527,0.772 0.527,1.235z" fill="currentColor" xmlns="http://www.w3.org/2000/svg"/></svg>',
    },
    {
      metricValueIdentifier1: "100m",
      productIdentifier1: "1a7708",
      productFunctionalityDescription1: "Functional -> Stretch",
      htmlContent4:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 183_4" data-node-id="1091:4961" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="-_4" data-node-id="1091:4962" d="M20.414,15.1v1.8h-8.826v-1.8z" fill="white"/>\n</g></svg>',
      htmlContent7:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 182_4" data-node-id="1091:4965" xmlns="http://www.w3.org/2000/svg">\n<rect x="0" y="0" width="32" height="32" rx="16" fill="currentColor"/>\n<path id="+_4" data-node-id="1091:4966" d="M15.364,19.75v-7.5h1.272v7.5zM12.25,16.64v-1.28h7.5v1.28z" fill="white"/>\n</g></svg>',
      imgContent:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4989_62f229.svg",
      imgContent1:
        "https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4926_cb0ba6.webp",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector_7" data-node-id="1091:4931" d="M29.2,5.82h-5.4v-1.75c0,-1.08 -0.442,-2.11 -1.23,-2.88c-0.788,-0.76 -1.856,-1.19 -2.97,-1.19h-7.2c-1.114,0 -2.182,0.43 -2.97,1.19c-0.788,0.77 -1.23,1.8 -1.23,2.88v1.75h-5.4c-0.477,0 -0.935,0.18 -1.273,0.51c-0.337,0.33 -0.527,0.77 -0.527,1.23c0,0.47 0.19,0.91 0.527,1.24c0.338,0.33 0.796,0.51 1.273,0.51h0.6v19.78c0,0.77 0.316,1.51 0.879,2.06c0.562,0.54 1.325,0.85 2.121,0.85h19.2c0.796,0 1.559,-0.31 2.121,-0.85c0.563,-0.55 0.879,-1.29 0.879,-2.06v-19.78h0.6c0.477,0 0.935,-0.18 1.273,-0.51c0.337,-0.33 0.527,-0.77 0.527,-1.24c0,-0.46 -0.19,-0.9 -0.527,-1.23c-0.338,-0.33 -0.796,-0.51 -1.273,-0.51zM11.8,4.07c0,-0.15 0.063,-0.3 0.176,-0.41c0.112,-0.11 0.265,-0.17 0.424,-0.17h7.2c0.159,0 0.312,0.06 0.424,0.17c0.113,0.11 0.176,0.26 0.176,0.41v1.75h-8.4zM25,28.51h-18v-19.2h18zM14.2,13.96v9.31c0,0.47 -0.19,0.91 -0.527,1.24c-0.338,0.32 -0.796,0.51 -1.273,0.51c-0.477,0 -0.935,-0.19 -1.273,-0.51c-0.337,-0.33 -0.527,-0.77 -0.527,-1.24v-9.31c0,-0.46 0.19,-0.9 0.527,-1.23c0.338,-0.33 0.796,-0.51 1.273,-0.51c0.477,0 0.935,0.18 1.273,0.51c0.337,0.33 0.527,0.77 0.527,1.23zM21.4,13.96v9.31c0,0.47 -0.19,0.91 -0.527,1.24c-0.338,0.32 -0.796,0.51 -1.273,0.51c-0.477,0 -0.935,-0.19 -1.273,-0.51c-0.337,-0.33 -0.527,-0.77 -0.527,-1.24v-9.31c0,-0.46 0.19,-0.9 0.527,-1.23c0.338,-0.33 0.796,-0.51 1.273,-0.51c0.477,0 0.935,0.18 1.273,0.51c0.337,0.33 0.527,0.77 0.527,1.23z" fill="currentColor" xmlns="http://www.w3.org/2000/svg"/></svg>',
    },
  ],
  possibleInquiryTypes: [
    { inquiryType: "General Inquiry" },
    { inquiryType: "Customization" },
    { inquiryType: "Order Inquiry" },
    { inquiryType: "Product Inquiry" },
  ],
};

const theme = {
  others: {
    ALIGN_SELF_8FD4E705: "stretch",
    TEXT_ALIGN_AEB2CC55: "center",
    ALIGN_SELF_AEB2CC55: "center",
  },
};

export { mockData, theme };
