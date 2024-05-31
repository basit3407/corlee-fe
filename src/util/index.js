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
      imgContent: "/assets/img_1091_3989_6f61a8.svg",
      imgContent1: "/assets/img_1091_3999_8b011a.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_5" data-node-id="1091:4089" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_17" data-node-id="1091:4090" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_4" data-node-id="1091:4091" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4067_8167bb.svg",
      imgContent1: "/assets/img_1091_4077_4acdaf.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_8" data-node-id="1091:4167" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_29" data-node-id="1091:4168" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_7" data-node-id="1091:4169" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4145_25b329.svg",
      imgContent1: "/assets/img_1091_4155_c6f888.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_11" data-node-id="1091:4230" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_41" data-node-id="1091:4231" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_10" data-node-id="1091:4232" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4213_8367a8.svg",
      imgContent1: "/assets/img_1091_4218_887c2e.svg",
    },
  ],
  productDisplayWidgetOptions1: [
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_3" data-node-id="1091:4037" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_9" data-node-id="1091:4038" d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z" fill="currentColor"/>\n<path id="Vector 1_2" data-node-id="1091:4039" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.333 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4015_16bc1e.svg",
      imgContent1: "/assets/img_1091_4025_26c7ab.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_6" data-node-id="1091:4115" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_21" data-node-id="1091:4116" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_5" data-node-id="1091:4117" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4093_5e595d.svg",
      imgContent1: "/assets/img_1091_4103_25fcdf.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_9" data-node-id="1091:4188" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_33" data-node-id="1091:4189" d="M16.138,24.7644l-0.138,0.14l-0.151,-0.14c-6.531,-5.93 -10.849,-9.84 -10.849,-13.82c0,-2.75 2.062,-4.81 4.812,-4.81c2.118,0 4.18,1.38 4.909,3.25h2.558c0.729,-1.87 2.791,-3.25 4.909,-3.25c2.75,0 4.812,2.06 4.812,4.81c0,3.98 -4.317,7.89 -10.862,13.82zM22.188,3.3844c-2.393,0 -4.689,1.11 -6.188,2.86c-1.499,-1.75 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.31 -7.562,7.56c0,5.19 4.675,9.44 11.756,15.86l1.994,1.81l1.994,-1.81c7.081,-6.42 11.756,-10.67 11.756,-15.86c0,-4.25 -3.327,-7.56 -7.562,-7.56z" fill="currentColor"/>\n<path id="Vector 1_8" data-node-id="1091:4190" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.333,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.167,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4171_748833.svg",
      imgContent1: "/assets/img_1091_4176_2b8879.svg",
    },
  ],
  productDisplayWidgetArgs: [
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_4" data-node-id="1091:4063" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_13" data-node-id="1091:4064" d="M16.14,24.7654l-0.14,0.138l-0.15,-0.138c-6.53,-5.926 -10.85,-9.845 -10.85,-13.819c0,-2.75 2.06,-4.812 4.81,-4.812c2.12,0 4.18,1.375 4.91,3.245h2.56c0.73,-1.87 2.79,-3.245 4.91,-3.245c2.75,0 4.81,2.062 4.81,4.812c0,3.974 -4.32,7.893 -10.86,13.819zM22.19,3.3844c-2.39,0 -4.69,1.114 -6.19,2.86c-1.5,-1.746 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.314 -7.56,7.562c0,5.184 4.68,9.433 11.76,15.854l1.99,1.815l1.99,-1.815c7.09,-6.421 11.76,-10.67 11.76,-15.854c0,-4.248 -3.33,-7.562 -7.56,-7.562z" fill="currentColor"/>\n<path id="Vector 1_3" data-node-id="1091:4065" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.333 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4041_33ec44.svg",
      imgContent1: "/assets/img_1091_4051_a6d8e7.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_7" data-node-id="1091:4141" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_25" data-node-id="1091:4142" d="M16.14,24.7644l-0.14,0.14l-0.15,-0.14c-6.53,-5.93 -10.85,-9.84 -10.85,-13.82c0,-2.75 2.06,-4.81 4.81,-4.81c2.12,0 4.18,1.38 4.91,3.25h2.56c0.73,-1.87 2.79,-3.25 4.91,-3.25c2.75,0 4.81,2.06 4.81,4.81c0,3.98 -4.32,7.89 -10.86,13.82zM22.19,3.3844c-2.39,0 -4.69,1.11 -6.19,2.86c-1.5,-1.75 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.31 -7.56,7.56c0,5.19 4.68,9.44 11.76,15.86l1.99,1.81l1.99,-1.81c7.09,-6.42 11.76,-10.67 11.76,-15.86c0,-4.25 -3.33,-7.56 -7.56,-7.56z" fill="currentColor"/>\n<path id="Vector 1_6" data-node-id="1091:4143" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4119_f7dd66.svg",
      imgContent1: "/assets/img_1091_4129_882779.svg",
    },
    {
      productCode: "1A7708",
      htmlContent1:
        '<svg viewBox="0 0 32 32" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 302_10" data-node-id="1091:4209" xmlns="http://www.w3.org/2000/svg">\n<path id="Vector_37" data-node-id="1091:4210" d="M16.14,24.7644l-0.14,0.14l-0.15,-0.14c-6.53,-5.93 -10.85,-9.84 -10.85,-13.82c0,-2.75 2.06,-4.81 4.81,-4.81c2.12,0 4.18,1.38 4.91,3.25h2.56c0.73,-1.87 2.79,-3.25 4.91,-3.25c2.75,0 4.81,2.06 4.81,4.81c0,3.98 -4.32,7.89 -10.86,13.82zM22.19,3.3844c-2.39,0 -4.69,1.11 -6.19,2.86c-1.5,-1.75 -3.8,-2.86 -6.19,-2.86c-4.23,0 -7.56,3.31 -7.56,7.56c0,5.19 4.68,9.44 11.76,15.86l1.99,1.81l1.99,-1.81c7.09,-6.42 11.76,-10.67 11.76,-15.86c0,-4.25 -3.33,-7.56 -7.56,-7.56z" fill="currentColor"/>\n<path id="Vector 1_9" data-node-id="1091:4211" d="M10.75,4.3844l3.5,2l2,1.5l0.5,-1l3,-2l2,-0.5l3.5,1l2.5,2.5c0.33,1.33 0.9,4.2 0.5,5c-0.4,0.8 -2.17,4 -3,5.5l-9.5,8l-8.5,-8l-3.5,-4.5l-0.5,-3.5l1.5,-2.5l2,-3z" fill="currentColor"/>\n</g></svg>',
      imgContent: "/assets/img_1091_4192_a62a03.svg",
      imgContent1: "/assets/img_1091_4197_2c1494.svg",
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
      imgContent10: "/assets/img_1091_8917_40803b.svg",
      imgContent12: "/assets/img_1091_8930_3a3766.svg",
      imgContent14: "/assets/img_1091_8943_b1d92f.svg",
      imgContent9: "/assets/img_1091_9018_87271a.png",
      imgContent13: "/assets/img_1091_9005_fdff3a.png",
      imgContent11: "/assets/img_1091_9018_87271a.png",
      imgContent6: "/assets/img_1091_8907_303acd.png",
      imgContent7: "/assets/img_1091_8920_7b77a5.png",
      imgContent8: "/assets/img_1091_8933_dd24dc.png",
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
      imgContent10: "/assets/img_1091_8956_297af9.svg",
      imgContent12: "/assets/img_1091_8969_a11cc2.svg",
      imgContent14: "/assets/img_1091_8982_dca269.svg",
      imgContent9: "/assets/img_1091_9005_fdff3a.png",
      imgContent11: "/assets/img_1091_9018_87271a.png",
      imgContent13: "/assets/img_1091_9005_fdff3a.png",
      imgContent6: "/assets/img_1091_8946_8c6ab4.png",
      imgContent7: "/assets/img_1091_8959_240124.png",
      imgContent8: "/assets/img_1091_8972_3e61f0.png",
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
      imgContent10: "/assets/img_1091_8995_544432.svg",
      imgContent12: "/assets/img_1091_9008_dedc96.svg",
      imgContent14: "/assets/img_1091_9021_1a623d.svg",
      imgContent9: "/assets/img_1091_9005_fdff3a.png",
      imgContent11: "/assets/img_1091_9005_fdff3a.png",
      imgContent13: "/assets/img_1091_9018_87271a.png",
      imgContent6: "/assets/img_1091_8985_8d1df5.png",
      imgContent7: "/assets/img_1091_8998_eea642.png",
      imgContent8: "/assets/img_1091_9011_252dd4.png",
    },
  ],
  eventDisplayWidgetArgs: [
    {
      eventYear5: "2024",
      eventDate5: "25 NOV",
      eventDescription7: "nulla maxime voluptatem",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9: "/assets/img_1091_8740_5e534f.png",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9: "/assets/img_1091_8766_dd24db.png",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9: "/assets/img_1091_8792_50fc66.png",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9: "/assets/img_1091_8818_3fb63a.png",
    },
    {
      eventYear5: "2024",
      eventDate5: "10 DEC",
      eventDescription7: "Tempore reprehenderit.",
      dynamicContentWithShowMoreButton7:
        '<span    >Vel quo est voluptatum. Veritatis ipsam perferendis aut iure. Debitis ex laudantium maxime. Quas magnam molestiae voluptates ea similique odit... </span><span    class="text-link-style">show more</span>',
      imgContent9: "/assets/img_1091_8844_8e01e9.png",
    },
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
