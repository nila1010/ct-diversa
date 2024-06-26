export const dummyData = {
  url: "https://www.kea.dk/",
  tags: ["wcag21a", "wcag21aa", "best-practice"],
  timestamp: "2024-04-18T15:08:21.568Z",
  screenshot: {
    url: "kea.webp",
    width: 1440,
    height: 960,
  },
  violations: [
    {
      id: "heading-order",
      impact: "moderate",
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the order of headings is semantically correct",
      help: "Heading levels should only increase by one",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order invalid",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: "<h5>Du skal ikke bare vide.<br>Du skal kunne.</h5>",
          target: ["h5"],
          failureSummary: "Fix any of the following:\n  Heading order invalid",
        },
      ],
    },
    {
      id: "landmark-unique",
      impact: "moderate",
      tags: ["cat.semantics", "best-practice"],
      help: "Ensures landmarks are unique",
      description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-unique?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-unique",
              data: {
                role: "navigation",
                accessibleText: null,
              },
              relatedNodes: [
                {
                  html: '<nav class="hidden-xs hidden-sm">',
                  target: [".hidden-xs.hidden-sm:nth-child(4)"],
                },
                {
                  html: '<nav id="anchor-menu" class="anchor-disabled">',
                  target: ["#anchor-menu"],
                },
              ],
              impact: "moderate",
              message: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: "<nav>",
          target: [".extra-navigation > nav"],
          failureSummary: "Fix any of the following:\n  The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable",
        },
      ],
    },
    {
      id: "region",
      impact: "moderate",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures all page content is contained by landmarks",
      help: "All page content should be contained by landmarks",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div class="sitename">Københavns Erhvervsakademi</div>',
          target: [".sitename"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div class="skip-main"><a href="#maincontent">Spring til indhold</a></div>',
          target: [".skip-main"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<img class="hidden-xs hidden-sm" src="/images/resources/logo-main-black-single.png" alt="KEA - Københavns Erhvervsakademi - logo">',
          target: ['a[href="/"] > .hidden-xs.hidden-sm'],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<div class="utilities">',
          target: [".utilities"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<input type="text" name="q" id="mod-finder-searchword134" class="search-query input-medium" size="20" value="" placeholder="Søg ...">',
          target: ["#mod-finder-searchword134"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<section class="footer   pd-top-md pd-bottom-md">',
          target: ["section"],
          failureSummary: "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
      ],
    },
  ],
  passes: [
    {
      id: "avoid-inline-spacing",
      impact: null,
      tags: ["cat.structure", "wcag21aa", "wcag1412", "EN-301-549", "EN-9.1.4.12", "ACT"],
      description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
      help: "Inline text spacing must be adjustable with custom stylesheets",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/avoid-inline-spacing?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<ul class="nav menu dropdown mod-list sf-js-enabled sf-arrows" style="touch-action: pan-y;">',
          target: [".dropdown"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p style="margin-bottom: 0px;"><a href="/../uddannelser"><img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false"></a></p>',
          target: ["#qx-kea-text-9588 > p"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-88151" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-text-88151"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p style="margin-bottom: 0px;"><a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%"></a></p>',
          target: ["#qx-kea-text-5257 > p"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-20153" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm mg-bottom-md" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-text-20153"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-10217" class="qx-element qx-element-kea-text  base-color-6 pd-top-sm" style="padding-bottom: 15px;">',
          target: ["#qx-kea-text-10217"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<h1 class="h2" style="text-align: center;"><a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a></h1>',
          target: ["h1"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/Christina-salg-transparent-250x369.png" alt="" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['#qx-kea-text-17612 > p > a > img[alt=""]'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div style="background-color: #fff; padding: 15px 10px 2px 10px;">',
          target: ["#qx-kea-text-26449 > div:nth-child(1)"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p class="h3" style="text-align: center;"><a href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud#omstillingsfonden" onclick="saAutomatedLink(this, \'outbound\'); return false;">Få økonomisk tilskud til din efteruddannelse</a></p>',
          target: ["#qx-kea-text-26449 > div:nth-child(1) > .h3"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div style="background-color: #e12619; padding: 15px 10px 2px 10px;">',
          target: ["#qx-kea-text-26449 > div:nth-child(2)"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p style="text-align: center;"><a class="base-color-6" href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa kea-icon-arrow-right"></i> Læs hvordan på kea.dk/tilskud</a></p>',
          target: ["#qx-kea-text-26449 > div:nth-child(2) > p"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="kontakt"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-42080 > .col-md-6.col-lg-6.solid:nth-child(2) > a > .image"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="labs"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #ffc300;"></div>',
          target: ['a[href$="studieliv"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['img[width="80%"]'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div style="background-color: #fff; padding: 15px 10px 2px 10px;">\n<p class="h2" style="text-align: center;"><a href="/../uddannelser#keahjulet">Find den rigtige uddannelse for dig</a></p>\n</div>',
          target: ["#qx-kea-text-472529 > div:nth-child(1)"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p class="h2" style="text-align: center;"><a href="/../uddannelser#keahjulet">Find den rigtige uddannelse for dig</a></p>',
          target: ["#qx-kea-text-472529 > div:nth-child(1) > .h2"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div style="background-color: #e12619; padding: 15px 10px 2px 10px;">\n<p style="text-align: center;"><a class="base-color-6" href="/../uddannelser#keahjulet"><i class="fa kea-icon-arrow-right"></i> Prøv KEA-hjulet</a></p>\n</div>',
          target: ["#qx-kea-text-472529 > div:nth-child(2)"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p style="text-align: center;"><a class="base-color-6" href="/../uddannelser#keahjulet"><i class="fa kea-icon-arrow-right"></i> Prøv KEA-hjulet</a></p>',
          target: ["#qx-kea-text-472529 > div:nth-child(2) > p"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="forskning-og-udvikling"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-joomla-module-2092" class="qx-element qx-element-kea-joomla-module  base-color-6 pd-top-sm pd-right-sm pd-left-sm mg-bottom-lg" style="background-color: #4b7b52; padding-bottom: 15px;">',
          target: ["#qx-kea-joomla-module-2092"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-joomla-module-97660" class="qx-element qx-element-kea-joomla-module  pd-top-sm pd-right-sm pd-left-sm mg-bottom-lg" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-joomla-module-97660"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(1) > a > .image"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(2) > a > .image"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(3) > a > .image"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-432227" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm" style="background-color: #fff; padding-bottom: 14px;">',
          target: ["#qx-kea-text-432227"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-671722" class="qx-element qx-element-kea-text  base-color-6 pd-top-md pd-bottom-lg pd-right-lg pd-left-lg mg-bottom-lg" style="background-color: #db334f;">',
          target: ["#qx-kea-text-671722"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p class="h4" style="text-align: center;">Vidste du at ...</p>',
          target: [".h4"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<p class="h2" style="text-align: center;">På KEA møder design, teknologi og business hinanden. <br>Ikke mindst fordi verden udenfor efterspørger netop dén kombination.</p>',
          target: ["#qx-kea-text-671722 > .h2"],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-12.col-lg-12.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="alumne"] > .image'],
        },
        {
          any: [],
          all: [
            {
              id: "important-letter-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-word-spacing",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "word-spacing in the style attribute is not set to !important, or meets the minimum",
            },
            {
              id: "important-line-height",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "line-height in the style attribute is not set to !important, or meets the minimum",
            },
          ],
          none: [],
          impact: null,
          html: '<img style="width: 150px; height: 56px; border: none;" src="/images/resources/podbean.png" alt="Find vores podcasts på Podbean">',
          target: ['img[src$="podbean.png"]'],
        },
      ],
    },
    {
      id: "empty-heading",
      impact: null,
      tags: ["cat.name-role-value", "best-practice"],
      description: "Ensures headings have discernible text",
      help: "Headings should not be empty",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/empty-heading?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="/../uddannelser">Videregående uddannelser <br>på fuldtid</a></h2>',
          target: ["#qx-kea-text-88151 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Efteruddannelser og kurser <br>på deltid</a></h2>',
          target: ["#qx-kea-text-20153 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="h2" style="text-align: center;"><a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a></h1>',
          target: ["h1"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Nyheder fra KEA</h2>",
          target: ["#qx-kea-joomla-module-462924 > .moduletable > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tÅrets KEA-praktik er fundet\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tEnergioptimering kræver kreative tanker\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tVibekes praktik var en faglig øjenåbner \t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tCphbusiness og KEA vil afdække potentialet i at gå sammen om et nyt kraftcenter for viden og uddannelse i Region Hovedstaden\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">efteruddannelser og kurser</h2>',
          target: ["#qx-kea-text-3577 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">videregående uddannelser</h2>',
          target: ["#qx-kea-text-591417 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Forskning og udvikling</h2>',
          target: ["#qx-kea-text-11390 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Podcasts fra KEA</h2>',
          target: ["#qx-kea-joomla-module-2092 > .section-heading"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tBrugerne og deres behov\t</h3>',
          target: ['a[href$="brugerne-og-deres-behov"] > h3'],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Forskningsprojekter</h2>',
          target: ["#qx-kea-joomla-module-97660 > .section-heading"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDet fysiske rum som brandingkanal\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tUdvikling og implementering af Kliniske Retningslinjer for Optometri i Danmark\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tMATBridge\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDesign mod inkontinens\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Samarbejde og virksomheder</h2>',
          target: ["#qx-kea-text-621375 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Skræddersyede virksomhedskurser</h2>",
          target: ["#qx-kea-text-432227 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Bliv en del af KEA Alumne</h2>',
          target: ["#qx-kea-text-732836 > h2"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">KEA - Københavns Erhvervsakademi</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(1) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h5>Du skal ikke bare vide.<br>Du skal kunne.</h5>",
          target: ["h5"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Om os</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For virksomheder</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For censorer</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For studerende</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For alumner</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For ansatte</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Praktisk info</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Kontakt</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "has-visible-text",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element has text that is visible to screen readers",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Genveje</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(3) > .h3"],
        },
      ],
    },
    {
      id: "heading-order",
      impact: "moderate",
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the order of headings is semantically correct",
      help: "Heading levels should only increase by one",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "heading-order",
              data: {
                headingOrder: [
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(2) > div > div > div > div > h1"],
                    level: 1,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(1) > div > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(3) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(4) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(6) > div > div:nth-child(1) > div > div > h2"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(6) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div > iframe:nth-child(1)"],
                    level: -1,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(7) > div > div:nth-child(1) > div > div > h2"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(7) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div > div > iframe:nth-child(1)"],
                    level: -1,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(1) > div > div > h2"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(3) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(4) > a > h3:nth-child(2)"],
                    level: 3,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(9) > div > div:nth-child(1) > div > div > h2"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(9) > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div > iframe:nth-child(1)"],
                    level: -1,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(9) > div > div:nth-child(3) > div:nth-child(1) > div > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > main:nth-child(2) > div > div > div > div > div:nth-child(11) > div > div:nth-child(1) > div > div > h2"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(5)"],
                    level: 5,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(3) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(1) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(3) > div:nth-child(3) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(4) > div:nth-child(1) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(4) > div:nth-child(2) > h2:nth-child(1)"],
                    level: 2,
                  },
                  {
                    ancestry: ["html > body > div:nth-child(2) > section:nth-child(3) > div > div > div:nth-child(4) > div:nth-child(3) > h2:nth-child(1)"],
                    level: 2,
                  },
                ],
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="/../uddannelser">Videregående uddannelser <br>på fuldtid</a></h2>',
          target: ["#qx-kea-text-88151 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Efteruddannelser og kurser <br>på deltid</a></h2>',
          target: ["#qx-kea-text-20153 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="h2" style="text-align: center;"><a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a></h1>',
          target: ["h1"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Nyheder fra KEA</h2>",
          target: ["#qx-kea-joomla-module-462924 > .moduletable > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tÅrets KEA-praktik er fundet\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tEnergioptimering kræver kreative tanker\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tVibekes praktik var en faglig øjenåbner \t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tCphbusiness og KEA vil afdække potentialet i at gå sammen om et nyt kraftcenter for viden og uddannelse i Region Hovedstaden\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">efteruddannelser og kurser</h2>',
          target: ["#qx-kea-text-3577 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">videregående uddannelser</h2>',
          target: ["#qx-kea-text-591417 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Forskning og udvikling</h2>',
          target: ["#qx-kea-text-11390 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Podcasts fra KEA</h2>',
          target: ["#qx-kea-joomla-module-2092 > .section-heading"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tBrugerne og deres behov\t</h3>',
          target: ['a[href$="brugerne-og-deres-behov"] > h3'],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Forskningsprojekter</h2>',
          target: ["#qx-kea-joomla-module-97660 > .section-heading"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDet fysiske rum som brandingkanal\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tUdvikling og implementering af Kliniske Retningslinjer for Optometri i Danmark\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tMATBridge\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDesign mod inkontinens\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Samarbejde og virksomheder</h2>',
          target: ["#qx-kea-text-621375 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Skræddersyede virksomhedskurser</h2>",
          target: ["#qx-kea-text-432227 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Bliv en del af KEA Alumne</h2>',
          target: ["#qx-kea-text-732836 > h2"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">KEA - Københavns Erhvervsakademi</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(1) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Om os</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For virksomheder</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For censorer</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For studerende</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For alumner</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For ansatte</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Praktisk info</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Kontakt</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "heading-order",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Heading order valid",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Genveje</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(3) > .h3"],
        },
      ],
    },
    {
      id: "image-redundant-alt",
      impact: null,
      tags: ["cat.text-alternatives", "best-practice"],
      description: "Ensure image alternative is not repeated as text",
      help: "Alternative text of images should not be repeated as text",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/image-redundant-alt?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img class="hidden-xs hidden-sm" src="/images/resources/logo-main-black-single.png" alt="KEA - Københavns Erhvervsakademi - logo">',
          target: ['a[href="/"] > .hidden-xs.hidden-sm'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false">',
          target: ['img[caption="false"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%">',
          target: ['img[width="100%"][alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg" srcset="/slir/w630-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 630w, /slir/w496-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 496w, /slir/w396-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 396w, /slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 315w, /slir/w248-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 248w, /slir/w198-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/Christina-salg-transparent-250x369.png" alt="" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['#qx-kea-text-17612 > p > a > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['img[width="80%"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg" srcset="/slir/w630-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 630w, /slir/w496-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 496w, /slir/w396-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 396w, /slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 315w, /slir/w248-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 248w, /slir/w198-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 198w" sizes="(min-width: 1200px) 1140px, (min-width: 992px) 940px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['a[href$="brugerne-og-deres-behov"] > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg" srcset="/slir/w630-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 630w, /slir/w496-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 496w, /slir/w396-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 396w, /slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 315w, /slir/w248-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 248w, /slir/w198-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/news/2021/04/DSC07054.jpg" srcset="/slir/w630-c5x3//images/news/2021/04/DSC07054.jpg 630w, /slir/w496-c5x3//images/news/2021/04/DSC07054.jpg 496w, /slir/w396-c5x3//images/news/2021/04/DSC07054.jpg 396w, /slir/w315-c5x3//images/news/2021/04/DSC07054.jpg 315w, /slir/w248-c5x3//images/news/2021/04/DSC07054.jpg 248w, /slir/w198-c5x3//images/news/2021/04/DSC07054.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img style="width: 150px; height: 56px; border: none;" src="/images/resources/podbean.png" alt="Find vores podcasts på Podbean">',
          target: ['img[src$="podbean.png"]'],
        },
      ],
    },
    {
      id: "label-title-only",
      impact: null,
      tags: ["cat.forms", "best-practice"],
      description: "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
      help: "Form elements should have a visible label",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/label-title-only?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "title-only",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Form element does not solely use title attribute for its label",
            },
          ],
          impact: null,
          html: '<input type="text" name="q" id="mod-finder-searchword134" class="search-query input-medium" size="20" value="" placeholder="Søg ...">',
          target: ["#mod-finder-searchword134"],
        },
      ],
    },
    {
      id: "landmark-main-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the main landmark is at top level",
      help: "Main landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-main-is-top-level?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-top-level",
              data: {
                role: "main",
              },
              relatedNodes: [],
              impact: "moderate",
              message: "The main landmark is at the top level.",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<main class="container" tabindex="-1" id="maincontent">',
          target: ["#maincontent"],
        },
      ],
    },
    {
      id: "landmark-no-duplicate-main",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one main landmark",
      help: "Document should not have more than one main landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-main?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "page-no-duplicate-main",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Document does not have more than one main landmark",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<main class="container" tabindex="-1" id="maincontent">',
          target: ["#maincontent"],
        },
      ],
    },
    {
      id: "landmark-one-main",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has a main landmark",
      help: "Document should have one main landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-one-main?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "page-has-main",
              data: null,
              relatedNodes: [
                {
                  html: '<main class="container" tabindex="-1" id="maincontent">',
                  target: ["#maincontent"],
                },
              ],
              impact: "moderate",
              message: "Document has at least one main landmark",
            },
          ],
          none: [],
          impact: null,
          html: '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="da-dk" lang="da-dk" dir="ltr">',
          target: ["html"],
        },
      ],
    },
    {
      id: "landmark-unique",
      impact: "moderate",
      tags: ["cat.semantics", "best-practice"],
      help: "Ensures landmarks are unique",
      description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-unique?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "landmark-is-unique",
              data: {
                role: "main",
                accessibleText: null,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<main class="container" tabindex="-1" id="maincontent">',
          target: ["#maincontent"],
        },
      ],
    },
    {
      id: "meta-viewport-large",
      impact: null,
      tags: ["cat.sensory-and-visual-cues", "best-practice"],
      description: 'Ensures <meta name="viewport"> can scale a significant amount',
      help: "Users should be able to zoom and scale the text up to 500%",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/meta-viewport-large?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "meta-viewport-large",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "<meta> tag does not prevent significant zooming on mobile devices",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          target: ['meta[name="viewport"]'],
        },
      ],
    },
    {
      id: "page-has-heading-one",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensure that the page, or at least one of its frames contains a level-one heading",
      help: "Page should contain a level-one heading",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/page-has-heading-one?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [
            {
              id: "page-has-heading-one",
              data: null,
              relatedNodes: [
                {
                  html: '<h1 class="h2" style="text-align: center;"><a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a></h1>',
                  target: ["h1"],
                },
              ],
              impact: "moderate",
              message: "Page has at least one level-one heading",
            },
          ],
          none: [],
          impact: null,
          html: '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="da-dk" lang="da-dk" dir="ltr">',
          target: ["html"],
        },
      ],
    },
    {
      id: "presentation-role-conflict",
      impact: null,
      tags: ["cat.aria", "best-practice", "ACT"],
      description: "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
      help: "Ensure elements marked as presentational are consistently ignored",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/presentation-role-conflict?application=axe-puppeteer",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%">',
          target: ['img[width="100%"][alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg" srcset="/slir/w630-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 630w, /slir/w496-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 496w, /slir/w396-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 396w, /slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 315w, /slir/w248-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 248w, /slir/w198-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/Christina-salg-transparent-250x369.png" alt="" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['#qx-kea-text-17612 > p > a > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['img[width="80%"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg" srcset="/slir/w630-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 630w, /slir/w496-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 496w, /slir/w396-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 396w, /slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 315w, /slir/w248-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 248w, /slir/w198-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 198w" sizes="(min-width: 1200px) 1140px, (min-width: 992px) 940px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['a[href$="brugerne-og-deres-behov"] > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg" srcset="/slir/w630-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 630w, /slir/w496-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 496w, /slir/w396-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 396w, /slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 315w, /slir/w248-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 248w, /slir/w198-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: "is-element-focusable",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message: "Element is focusable.",
            },
            {
              id: "has-global-aria-attribute",
              data: [],
              relatedNodes: [],
              impact: "minor",
              message: "Element has global ARIA attributes: ",
            },
          ],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/news/2021/04/DSC07054.jpg" srcset="/slir/w630-c5x3//images/news/2021/04/DSC07054.jpg 630w, /slir/w496-c5x3//images/news/2021/04/DSC07054.jpg 496w, /slir/w396-c5x3//images/news/2021/04/DSC07054.jpg 396w, /slir/w315-c5x3//images/news/2021/04/DSC07054.jpg 315w, /slir/w248-c5x3//images/news/2021/04/DSC07054.jpg 248w, /slir/w198-c5x3//images/news/2021/04/DSC07054.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
      ],
    },
    {
      id: "region",
      impact: "moderate",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures all page content is contained by landmarks",
      help: "All page content should be contained by landmarks",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="page-wrapper mm-page mm-slideout" id="mm-0">',
          target: ["#mm-0"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="default-header">',
          target: [".default-header"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="extra-navigation hidden-xs hidden-sm">',
          target: [".extra-navigation"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="#maincontent">Spring til indhold</a>',
          target: ['a[href$="#maincontent"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<nav>",
          target: [".extra-navigation > nav"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".extra-navigation > nav > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-366"><a href="https://mit.kea.dk/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">For studerende</a></li>',
          target: [".item-366"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://mit.kea.dk/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">For studerende</a>',
          target: ['a[href$="mit.kea.dk/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-367"><a href="https://studkea.sharepoint.com/sites/KEAnet" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">For ansatte</a></li>',
          target: [".item-367"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://studkea.sharepoint.com/sites/KEAnet" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">For ansatte</a>',
          target: ['.item-367 > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1008 parent"><a href="/for-alumner">For alumner</a></li>',
          target: [".item-1008"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/for-alumner">For alumner</a>',
          target: ['.item-1008 > a[href$="for-alumner"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-417"><a href="https://bibliotek.kea.dk/da/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Bibliotek</a></li>',
          target: [".item-417"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://bibliotek.kea.dk/da/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Bibliotek</a>',
          target: ['.item-417 > a[href$="da/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-368"><a href="https://kea.career.emply.com/da/ledige-stillinger" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Job</a></li>',
          target: [".item-368"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.career.emply.com/da/ledige-stillinger" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Job</a>',
          target: ['.item-368 > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-369"><a href="/om-kea/kontakt">Kontakt</a></li>',
          target: [".item-369"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/kontakt">Kontakt</a>',
          target: ['.item-369 > a[href$="kontakt"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="brand">',
          target: [".brand"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/">\n\t\t\t\t\t<img class="hidden-xs hidden-sm" src="/images/resources/logo-main-black-single.png" alt="KEA - Københavns Erhvervsakademi - logo">\n\t\t\t\t\t<img class="hidden-md hidden-lg" src="/images/resources/logo-small.png" alt="KEA - Københavns Erhvervsakademi - logo">\n\t\t\t\t</a>',
          target: ['a[href="/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav class="hidden-xs hidden-sm">',
          target: [".hidden-xs.hidden-sm:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu dropdown mod-list sf-js-enabled sf-arrows" style="touch-action: pan-y;">',
          target: [".dropdown"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-129 deeper parent">',
          target: [".dropdown > .item-129.deeper.parent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/uddannelser" class="sf-with-ul">Uddannelser</a>',
          target: ['.sf-with-ul[href$="uddannelser"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-242 deeper parent">',
          target: [".dropdown > .item-242.deeper.parent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://kompetence.kea.dk" class="sf-with-ul" onclick="saAutomatedLink(this, \'outbound\'); return false;">Efteruddannelser</a>',
          target: ['.sf-with-ul[href$="kompetence.kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-269 deeper parent">',
          target: [".dropdown > .item-269.deeper.parent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/forskning-og-udvikling" class="sf-with-ul">Forskning og udvikling</a>',
          target: ['.sf-with-ul[href$="forskning-og-udvikling"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-150 deeper parent">',
          target: [".dropdown > .item-150.deeper.parent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/for-virksomheder" class="sf-with-ul">Samarbejde og virksomheder</a>',
          target: ['.sf-with-ul[href$="for-virksomheder"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-158 deeper parent">',
          target: [".dropdown > .item-158.deeper.parent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea" class="sf-with-ul">Om KEA</a>',
          target: ['.sf-with-ul[href$="om-kea"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="language">\n\t\t\t\t\t<div class="mod-languages">\n\n\t<ul class="lang-inline">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t<a href="/en/">\n\t\t\t\t\t\t\tEN\t\t\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t\t</ul>\n\n</div>\n\n\t\t\t\t</div>',
          target: [".language"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="mod-languages">\n\n\t<ul class="lang-inline">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t<a href="/en/">\n\t\t\t\t\t\t\tEN\t\t\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t\t</ul>\n\n</div>',
          target: [".mod-languages"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="lang-inline">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t<a href="/en/">\n\t\t\t\t\t\t\tEN\t\t\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t\t</ul>',
          target: [".lang-inline"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>\n\t\t\t<a href="/en/">\n\t\t\t\t\t\t\tEN\t\t\t\t\t\t</a>\n\t\t\t</li>',
          target: [".lang-inline > li"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/en/">\n\t\t\t\t\t\t\tEN\t\t\t\t\t\t</a>',
          target: ['a[href$="en/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search-button">\n\t\t\t\t\t<a href="#search"><span class="fa fa-search"></span></a>\n\t\t\t\t</div>',
          target: [".search-button"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="#search"><span class="fa fa-search"></span></a>',
          target: ['a[href$="#search"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="fa fa-search"></span>',
          target: [".fa-search"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="search">',
          target: [".search"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".search > .moduletable"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<form id="mod-finder-searchform134" action="/søg" method="get" class="form-search">',
          target: ["#mod-finder-searchform134"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="finder">',
          target: ["#mod-finder-searchform134 > .finder"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="btn btn-primary hasTooltip  finder" type="submit" title="Kør"><span class="icon-search icon-white"></span>Søg</button>',
          target: [".hasTooltip"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="icon-search icon-white"></span>',
          target: [".icon-search"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<main class="container" tabindex="-1" id="maincontent">',
          target: ["#maincontent"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="article">',
          target: [".article"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="quix-content mg-top-md mg-bottom-md">',
          target: [".quix-content"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx quix">',
          target: [".qx"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-inner x11">',
          target: [".qx-inner"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-91131" class="qx-section negate-top-margin qx-section--stretch">',
          target: ["#qx-section-91131"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-91131 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-851132" class="qx-row ">',
          target: ["#qx-row-851132"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-751134" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-751134"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-9588" class="qx-element qx-element-kea-text  mg-top-md">\n<p style="margin-bottom: 0px;"><a href="/../uddannelser"><img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false"></a></p></div>',
          target: ["#qx-kea-text-9588"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p style="margin-bottom: 0px;"><a href="/../uddannelser"><img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false"></a></p>',
          target: ["#qx-kea-text-9588 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/../uddannelser"><img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false"></a>',
          target: ['p > a[href$="uddannelser"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/sissel-entreprenorskab-design-forside-1400x1000.jpg" width="100%" caption="false">',
          target: ['img[caption="false"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-88151" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-text-88151"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="/../uddannelser">Videregående uddannelser <br>på fuldtid</a></h2>',
          target: ["#qx-kea-text-88151 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/../uddannelser">Videregående uddannelser <br>på fuldtid</a>',
          target: ['h2 > a[href$="uddannelser"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ['h2 > a[href$="uddannelser"] > br'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>For dig, der vil tage en videregående uddannelse med SU, der kombinerer teori og praksis tæt på erhvervslivet.</p>",
          target: ["#qx-kea-text-88151 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-31136" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-31136"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-5257" class="qx-element qx-element-kea-text  mg-top-md">',
          target: ["#qx-kea-text-5257"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p style="margin-bottom: 0px;"><a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%"></a></p>',
          target: ["#qx-kea-text-5257 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%"></a>',
          target: ['p > a[href$="kompetence.kea.dk/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/lars-ledelse-1400x1000.jpg" alt="" width="100%">',
          target: ['img[width="100%"][alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-20153" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm mg-bottom-md" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-text-20153"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2><a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Efteruddannelser og kurser <br>på deltid</a></h2>',
          target: ["#qx-kea-text-20153 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://kompetence.kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;">Efteruddannelser og kurser <br>på deltid</a>',
          target: ['h2 > a[href$="kompetence.kea.dk/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ['a[href$="kompetence.kea.dk/"] > br'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Opgrader din faglighed ved at videreuddanne dig ved siden af dit job – for dig, der er midt i dit arbejdsliv.</p>",
          target: ["#qx-kea-text-20153 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-8978" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-8978"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-8978 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-7079" class="qx-row ">',
          target: ["#qx-row-7079"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-62214" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">',
          target: ["#qx-column-62214"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-10217" class="qx-element qx-element-kea-text  base-color-6 pd-top-sm" style="padding-bottom: 15px;">',
          target: ["#qx-kea-text-10217"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="h2" style="text-align: center;"><a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a></h1>',
          target: ["h1"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="base-color-6" href="/../uddannelser">Klar til noget nyt?<br><i class="fa kea-icon-arrow-right"></i> Find en uddannelse for dig</a>',
          target: ['.base-color-6[href$="uddannelser"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ['.base-color-6[href$="uddannelser"] > br'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa kea-icon-arrow-right"></i>',
          target: ['.base-color-6[href$="uddannelser"] > .kea-icon-arrow-right'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-55166" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-55166"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">\n  \n    <div id="qx-row-24167" class="qx-row ">\n\n    <div id="qx-column-30169" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n    \n  </div>\n  <!-- qx-row -->\n\n    </div>',
          target: ["#qx-section-55166 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-24167" class="qx-row ">\n\n    <div id="qx-column-30169" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n    \n  </div>',
          target: ["#qx-row-24167"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-30169" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>',
          target: ["#qx-column-30169"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-15116" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-15116"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">\n  \n    <div id="qx-row-73122" class="qx-row ">\n\n    <div id="qx-column-65123" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n    \n  </div>\n  <!-- qx-row -->\n\n    </div>',
          target: ["#qx-section-15116 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-73122" class="qx-row ">\n\n    <div id="qx-column-65123" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n    \n  </div>',
          target: ["#qx-row-73122"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-65123" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  </div>',
          target: ["#qx-column-65123"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-86138" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-86138"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-86138 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-35139" class="qx-row  qx-hidden-xs">',
          target: ["#qx-row-35139"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-46141" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">',
          target: ["#qx-column-46141"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-joomla-module-462924" class="qx-element qx-element-kea-joomla-module  pd-top-lg">',
          target: ["#qx-kea-joomla-module-462924"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Nyheder fra KEA</h2>",
          target: ["#qx-kea-joomla-module-462924 > .moduletable > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="row-flex newslist">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-6 col-md-3 col-lg-3">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/nyheder/årets-kea-praktik-er-fundet">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(1) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/jury-2024-2200.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tÅrets KEA-praktik er fundet\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<time datetime="2024-04-17T14:01:58+02:00" itemprop="datePublished">17. april 2024</time>',
          target: ['#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > time[datetime="2024-04-17T14:01:58+02:00"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Det var ingen nem opgave for den jury, der netop har været samlet for at vælge vinderen blandt de fem nominerede til årets KEA-praktik…</p>",
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(1) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-6 col-md-3 col-lg-3">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/nyheder/energioptimering-kræver-kreative-tanker">',
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(2) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Skærmbillede_2024-04-11_kl._16.13.19.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tEnergioptimering kræver kreative tanker\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<time datetime="2024-04-11T16:15:44+02:00" itemprop="datePublished">11. april 2024</time>',
          target: ['#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > time[datetime="2024-04-11T16:15:44+02:00"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Som praktikant hos Bang &amp; Beenfeldt arbejder Tino Rubini Jensen med eksisterende og fredede bygninger, men det gør kun arbejdet med…</p>",
          target: ["#qx-kea-joomla-module-462924 > .moduletable > .newslist.row-flex > .col-lg-3.col-sm-6.col-md-3:nth-child(2) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-6 col-md-3 col-lg-3">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/nyheder/vibekes-praktik-var-en-faglig-øjenåbner">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg" srcset="/slir/w630-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 630w, /slir/w496-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 496w, /slir/w396-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 396w, /slir/w315-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 315w, /slir/w248-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 248w, /slir/w198-c5x3/images/nyheder/2024/04/Vibeke_still_3.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tVibekes praktik var en faglig øjenåbner \t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<time datetime="2024-04-11T10:17:00+02:00" itemprop="datePublished">11. april 2024</time>',
          target: ['time[datetime="2024-04-11T10:17:00+02:00"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Vibeke Lenskjær lagde sin fysikbaggrund på hylden, da hun begyndte på uddannelsen til automationsteknolog. I praktikken hos…</p>",
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(3) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-6 col-md-3 col-lg-3">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/nyheder/cphbusiness-og-kea-vil-afdaekke-potentialet-i-at-gaa-sammen-om-et-nyt-kraftcenter-for-viden-og-uddannelse-i-region-hovedstaden">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg" srcset="/slir/w630-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 630w, /slir/w496-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 496w, /slir/w396-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 396w, /slir/w315-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 315w, /slir/w248-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 248w, /slir/w198-c5x3/images/DA/Presse/Downloads/Bygning-GBG_thumb.jpg 198w" sizes="(min-width: 1200px) 263px, (min-width: 992px) 213px, (min-width: 768px) 345px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tCphbusiness og KEA vil afdække potentialet i at gå sammen om et nyt kraftcenter for viden og uddannelse i Region Hovedstaden\t</h3>',
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<time datetime="2024-04-10T13:58:27+02:00" itemprop="datePublished">10. april 2024</time>',
          target: ['time[datetime="2024-04-10T13:58:27+02:00"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Mandag den 8. april vedtog de to erhvervsakademiers bestyrelser at påbegynde udarbejdelsen af en indstilling, som kan føre til en…</p>",
          target: [".col-lg-3.col-sm-6.col-md-3:nth-child(4) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-9485" class="qx-element qx-element-kea-text  pd-bottom-md">\n<p><a class="page block" href="/../om-kea/nyheder" title="Gå til oversigt over alle nyheder fra KEA">Se alle nyheder</a></p></div>',
          target: ["#qx-kea-text-9485"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><a class="page block" href="/../om-kea/nyheder" title="Gå til oversigt over alle nyheder fra KEA">Se alle nyheder</a></p>',
          target: ["#qx-kea-text-9485 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="page block" href="/../om-kea/nyheder" title="Gå til oversigt over alle nyheder fra KEA">Se alle nyheder</a>',
          target: ['#qx-kea-text-9485 > p > .page.block[href$="nyheder"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-18108" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-18108"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-18108 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-94561" class="qx-row ">',
          target: ["#qx-row-94561"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-90563" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  <div id="qx-kea-text-3577" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">efteruddannelser og kurser</h2></div>\n</div>',
          target: ["#qx-column-90563"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-3577" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">efteruddannelser og kurser</h2></div>',
          target: ["#qx-kea-text-3577"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">efteruddannelser og kurser</h2>',
          target: ["#qx-kea-text-3577 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-62109" class="qx-row ">',
          target: ["#qx-row-62109"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-11111" class="qx-column  qx-col-lg-4 qx-col-md-4 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-11111"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-17612" class="qx-element qx-element-kea-text ">',
          target: ["#qx-kea-text-17612"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>",
          target: ["#qx-kea-text-17612 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud#omstillingsfonden" onclick="saAutomatedLink(this, \'outbound\'); return false;">',
          target: ["#qx-kea-text-17612 > p > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/Christina-salg-transparent-250x369.png" alt="" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['#qx-kea-text-17612 > p > a > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-26449" class="qx-element qx-element-kea-text  mg-bottom-lg">',
          target: ["#qx-kea-text-26449"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="background-color: #fff; padding: 15px 10px 2px 10px;">',
          target: ["#qx-kea-text-26449 > div:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="h3" style="text-align: center;"><a href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud#omstillingsfonden" onclick="saAutomatedLink(this, \'outbound\'); return false;">Få økonomisk tilskud til din efteruddannelse</a></p>',
          target: ["#qx-kea-text-26449 > div:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud#omstillingsfonden" onclick="saAutomatedLink(this, \'outbound\'); return false;">Få økonomisk tilskud til din efteruddannelse</a>',
          target: [".h3 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="background-color: #e12619; padding: 15px 10px 2px 10px;">',
          target: ["#qx-kea-text-26449 > div:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p style="text-align: center;"><a class="base-color-6" href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa kea-icon-arrow-right"></i> Læs hvordan på kea.dk/tilskud</a></p>',
          target: ["#qx-kea-text-26449 > div:nth-child(2) > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="base-color-6" href="https://kompetence.kea.dk/uddannelser/studievejledning/økonomisk-tilskud" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa kea-icon-arrow-right"></i> Læs hvordan på kea.dk/tilskud</a>',
          target: ["#qx-kea-text-26449 > div:nth-child(2) > p > .base-color-6"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa kea-icon-arrow-right"></i>',
          target: ["#qx-kea-text-26449 > div:nth-child(2) > p > .base-color-6 > .kea-icon-arrow-right"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-80113" class="qx-column  qx-col-lg-8 qx-col-md-8 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-80113"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-421029" class="row-flex qx-element qx-element-kea-presentation-box ">',
          target: ["#qx-kea-presentation-box-421029"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-421029 > .col-md-6.col-lg-6.solid:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="https://kompetence.kea.dk/virksomhedsydelser" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f22 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tKurser og forløb til virksomheder\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .f22.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tKurser og forløb til virksomheder\t\t\t\t\t</div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .f22.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-421029 > .col-md-6.col-lg-6.solid:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="https://kompetence.kea.dk/uddannelser" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f22 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tFind din næste efteruddannelse\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[rel="noopener noreferrer"][target="_blank"] > .f22.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tFind din næste efteruddannelse\t\t\t\t\t</div>',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[rel="noopener noreferrer"][target="_blank"] > .f22.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-element qx-element-kea-video  mg-top-sm mg-bottom-lg">',
          target: [".mg-top-sm"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-video-5085" class="row-flex">',
          target: ["#qx-kea-video-5085"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-video col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-none">',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="embed-container" data-src="//www.youtube-nocookie.com/embed/Y1Vt-wSr_04">',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-cookies">',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Videoen kunne ikke vises, fordi du ikke har accepteret funktionelle cookies. Indlæser du videoen, accepterer du at Youtube sætter cookies i din browser.</p>",
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(2) > .load-videos.btn.btn-primary"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Ønsker du at indlæse videoer automatisk, kan du i stedet vælge at acceptere funktionelle cookies generelt.</p>",
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-5085 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(4) > .accept-functional-cookies.load-videos.btn"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-541414" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-541414"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-541414 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-351415" class="qx-row ">',
          target: ["#qx-row-351415"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-821416" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  <div id="qx-kea-text-591417" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">videregående uddannelser</h2></div>\n</div>',
          target: ["#qx-column-821416"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-591417" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">videregående uddannelser</h2></div>',
          target: ["#qx-kea-text-591417"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">videregående uddannelser</h2>',
          target: ["#qx-kea-text-591417 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-371418" class="qx-row ">',
          target: ["#qx-row-371418"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-881419" class="qx-column  qx-col-lg-8 qx-col-md-8 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-881419"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-42080" class="row-flex qx-element qx-element-kea-presentation-box  pd-bottom-sm">',
          target: ["#qx-kea-presentation-box-42080"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-42080 > .col-md-6.col-lg-6.solid:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/uddannelser/kontakt">',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[href$="kontakt"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="kontakt"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f20 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tFå hjælp til at vælge uddannelse\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['a[href$="kontakt"] > .f20.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tFå hjælp til at vælge uddannelse\t\t\t\t\t</div>',
          target: ['a[href$="kontakt"] > .f20.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-42080 > .col-md-6.col-lg-6.solid:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/uddannelser/ansøgning-optagelse">',
          target: ["#qx-kea-presentation-box-42080 > .col-md-6.col-lg-6.solid:nth-child(2) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-42080 > .col-md-6.col-lg-6.solid:nth-child(2) > a > .image"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f20 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tSådan ansøger du\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: [".col-md-6.col-lg-6.solid:nth-child(2) > a > .f20.content-solid.base-color-1"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tSådan ansøger du\t\t\t\t\t</div>',
          target: [".col-md-6.col-lg-6.solid:nth-child(2) > a > .f20.content-solid.base-color-1 > .title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-element qx-element-kea-video  mg-bottom-md">',
          target: [".qx-element-kea-video.mg-bottom-md.qx-element"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-video-72262" class="row-flex">',
          target: ["#qx-kea-video-72262"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-video col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-none">',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="embed-container" data-src="//www.youtube-nocookie.com/embed/5D3kLeH2Ovo">',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-cookies">',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Videoen kunne ikke vises, fordi du ikke har accepteret funktionelle cookies. Indlæser du videoen, accepterer du at Youtube sætter cookies i din browser.</p>",
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(2) > .load-videos.btn.btn-primary"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Ønsker du at indlæse videoer automatisk, kan du i stedet vælge at acceptere funktionelle cookies generelt.</p>",
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-72262 > .mg-bottom-none.youtube-video.col-md-12 > .embed-container > .youtube-cookies > p:nth-child(4) > .accept-functional-cookies.load-videos.btn"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-86584" class="row-flex qx-element qx-element-kea-presentation-box  pd-bottom-md">',
          target: ["#qx-kea-presentation-box-86584"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-86584 > .col-md-6.col-lg-6.solid:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/labs">',
          target: ['.col-md-6.col-lg-6.solid:nth-child(1) > a[href$="labs"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="labs"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f24 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tLabs på KEA\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['a[href$="labs"] > .f24.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tLabs på KEA\t\t\t\t\t</div>',
          target: ['a[href$="labs"] > .f24.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-86584 > .col-md-6.col-lg-6.solid:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/uddannelser/studieliv">',
          target: ['.col-md-6.col-lg-6.solid:nth-child(2) > a[href$="studieliv"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #ffc300;"></div>',
          target: ['a[href$="studieliv"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f24 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tStudielivet på KEA\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['a[href$="studieliv"] > .f24.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tStudielivet på KEA\t\t\t\t\t</div>',
          target: ['a[href$="studieliv"] > .f24.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-451420" class="qx-column  qx-col-lg-4 qx-col-md-4 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-451420"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-111833" class="qx-element qx-element-kea-text ">\n<p><a href="/../uddannelser#keahjulet"><img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;"></a></p></div>',
          target: ["#qx-kea-text-111833"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><a href="/../uddannelser#keahjulet"><img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;"></a></p>',
          target: ["#qx-kea-text-111833 > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/../uddannelser#keahjulet"><img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;"></a>',
          target: ['#qx-kea-text-111833 > p > a[href$="uddannelser#keahjulet"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/../images/DA/Forside/ny-2022/Anders-fuld-fritlagt.png" alt="" width="80%" style="display: block; margin-left: auto; margin-right: auto;">',
          target: ['img[width="80%"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-472529" class="qx-element qx-element-kea-text  mg-bottom-lg">',
          target: ["#qx-kea-text-472529"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="background-color: #fff; padding: 15px 10px 2px 10px;">\n<p class="h2" style="text-align: center;"><a href="/../uddannelser#keahjulet">Find den rigtige uddannelse for dig</a></p>\n</div>',
          target: ["#qx-kea-text-472529 > div:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="h2" style="text-align: center;"><a href="/../uddannelser#keahjulet">Find den rigtige uddannelse for dig</a></p>',
          target: ["#qx-kea-text-472529 > div:nth-child(1) > .h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/../uddannelser#keahjulet">Find den rigtige uddannelse for dig</a>',
          target: ['.h2 > a[href$="uddannelser#keahjulet"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="background-color: #e12619; padding: 15px 10px 2px 10px;">\n<p style="text-align: center;"><a class="base-color-6" href="/../uddannelser#keahjulet"><i class="fa kea-icon-arrow-right"></i> Prøv KEA-hjulet</a></p>\n</div>',
          target: ["#qx-kea-text-472529 > div:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p style="text-align: center;"><a class="base-color-6" href="/../uddannelser#keahjulet"><i class="fa kea-icon-arrow-right"></i> Prøv KEA-hjulet</a></p>',
          target: ["#qx-kea-text-472529 > div:nth-child(2) > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="base-color-6" href="/../uddannelser#keahjulet"><i class="fa kea-icon-arrow-right"></i> Prøv KEA-hjulet</a>',
          target: ['.base-color-6[href$="uddannelser#keahjulet"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa kea-icon-arrow-right"></i>',
          target: ['.base-color-6[href$="uddannelser#keahjulet"] > .kea-icon-arrow-right'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-931387" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-931387"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-931387 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-271388" class="qx-row ">',
          target: ["#qx-row-271388"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-441389" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  <div id="qx-kea-text-11390" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">Forskning og udvikling</h2></div>\n</div>',
          target: ["#qx-column-441389"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-11390" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">Forskning og udvikling</h2></div>',
          target: ["#qx-kea-text-11390"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Forskning og udvikling</h2>',
          target: ["#qx-kea-text-11390 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-61391" class="qx-row ">',
          target: ["#qx-row-61391"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-921392" class="qx-column  qx-col-lg-4 qx-col-md-4 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-921392"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-854252" class="row-flex qx-element qx-element-kea-presentation-box  pd-bottom-sm">',
          target: ["#qx-kea-presentation-box-854252"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-854252 > .col-md-12.col-lg-12.solid"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/forskning-og-udvikling">',
          target: ['.col-md-12.col-lg-12.solid > a[href$="forskning-og-udvikling"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="forskning-og-udvikling"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f30 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tForskning på KEA\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: [".f30"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tForskning på KEA\t\t\t\t\t</div>',
          target: [".f30 > .title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-joomla-module-2092" class="qx-element qx-element-kea-joomla-module  base-color-6 pd-top-sm pd-right-sm pd-left-sm mg-bottom-lg" style="background-color: #4b7b52; padding-bottom: 15px;">',
          target: ["#qx-kea-joomla-module-2092"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Podcasts fra KEA</h2>',
          target: ["#qx-kea-joomla-module-2092 > .section-heading"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: ["#qx-kea-joomla-module-2092 > .moduletable"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="row-flex newslist">',
          target: ["#qx-kea-joomla-module-2092 > .moduletable > .newslist.row-flex"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-12 col-md-12 col-lg-12">',
          target: [".col-md-12.col-lg-12.newslist-item"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/blog/brugerne-og-deres-behov">',
          target: ['a[href$="brugerne-og-deres-behov"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: ['a[href$="brugerne-og-deres-behov"] > .image-wrapper'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg" srcset="/slir/w630-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 630w, /slir/w496-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 496w, /slir/w396-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 396w, /slir/w315-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 315w, /slir/w248-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 248w, /slir/w198-c5x3/images/DA/Om-KEA/podcast/it-udviklingsrejsen-teaser.jpg 198w" sizes="(min-width: 1200px) 1140px, (min-width: 992px) 940px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['a[href$="brugerne-og-deres-behov"] > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tBrugerne og deres behov\t</h3>',
          target: ['a[href$="brugerne-og-deres-behov"] > h3'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Episode 1: Vi befinder os i den tidlige fase af projektet, hvor man arbejder med at identificere og beskrive sine bruger- og forretningsbehov. Her…</p>",
          target: ['a[href$="brugerne-og-deres-behov"] > p'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-991393" class="qx-column  qx-col-lg-8 qx-col-md-8 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-991393"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-joomla-module-97660" class="qx-element qx-element-kea-joomla-module  pd-top-sm pd-right-sm pd-left-sm mg-bottom-lg" style="background-color: #fff; padding-bottom: 15px;">',
          target: ["#qx-kea-joomla-module-97660"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="section-heading">Forskningsprojekter</h2>',
          target: ["#qx-kea-joomla-module-97660 > .section-heading"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: ["#qx-kea-joomla-module-97660 > .moduletable"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="row-flex newslist">',
          target: ["#qx-kea-joomla-module-97660 > .moduletable > .newslist.row-flex"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-12 col-md-6 col-lg-6">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/forskning-og-udvikling/projekter-og-videnprodukter/projektoversigt/kea-design/det-fysiske-rum-som-brandingkanal">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg" srcset="/slir/w630-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 630w, /slir/w496-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 496w, /slir/w396-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 396w, /slir/w315-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 315w, /slir/w248-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 248w, /slir/w198-c5x3//images/EN/research/retail-report/retail-branding-2200x1400.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(1) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDet fysiske rum som brandingkanal\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Projektet var inspireret af en iagttagelse blandt undervisere, at selvom onlinehandlen fortsat…</p>",
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(1) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-12 col-md-6 col-lg-6">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/forskning-og-udvikling/projekter-og-videnprodukter/projektoversigt/kea-teknik/udvikling-og-implementering-af-kliniske-retningslinjer-for-optometri-i-danmark">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/kliniske-retningslinjer-optometri/kea-optik-3.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(2) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tUdvikling og implementering af Kliniske Retningslinjer for Optometri i Danmark\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>I modsætning til de andre skandinaviske lande så har Danmark ingen kliniske retningslinjer inden…</p>",
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(2) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-12 col-md-6 col-lg-6">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/forskning-og-udvikling/projekter-og-videnprodukter/projektoversigt/kea-teknik/matbridge">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png" srcset="/slir/w630-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 630w, /slir/w496-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 496w, /slir/w396-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 396w, /slir/w315-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 315w, /slir/w248-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 248w, /slir/w198-c5x3/images/DA/forskning-paa-kea/Projekter/MATBridge/MATBridge.png 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(3) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tMATBridge\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Projektets formål er at udvikle et digitalt værktøj, der kan øge bæredygtigheden…</p>",
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(3) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="newslist-item col-xs-12 col-sm-12 col-md-6 col-lg-6">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/forskning-og-udvikling/projekter-og-videnprodukter/projektoversigt/kea-digital/design-mod-inkontinens">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image-wrapper">',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a > .image-wrapper"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/slir/w315-c5x3//images/news/2021/04/DSC07054.jpg" srcset="/slir/w630-c5x3//images/news/2021/04/DSC07054.jpg 630w, /slir/w496-c5x3//images/news/2021/04/DSC07054.jpg 496w, /slir/w396-c5x3//images/news/2021/04/DSC07054.jpg 396w, /slir/w315-c5x3//images/news/2021/04/DSC07054.jpg 315w, /slir/w248-c5x3//images/news/2021/04/DSC07054.jpg 248w, /slir/w198-c5x3//images/news/2021/04/DSC07054.jpg 198w" sizes="(min-width: 1200px) 555px, (min-width: 992px) 455px, (min-width: 768px) 720px, calc((100vw - 30px) / 2)" alt="">',
          target: ['.col-md-6.col-lg-6.newslist-item:nth-child(4) > a > .image-wrapper > img[alt=""]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="news-title">\n\t\tDesign mod inkontinens\t</h3>',
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a > h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>En knibestribe foran KEA var én løsning blandt mange, som KEAs prisvindende forskningsprojekt…</p>",
          target: [".col-md-6.col-lg-6.newslist-item:nth-child(4) > a > p"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-371092" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-371092"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-371092 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-71373" class="qx-row ">',
          target: ["#qx-row-71373"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-261374" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  <div id="qx-kea-text-621375" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">Samarbejde og virksomheder</h2></div>\n</div>',
          target: ["#qx-column-261374"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-621375" class="qx-element qx-element-kea-text  pd-top-lg">\n<h2 style="opacity: 0.0;">Samarbejde og virksomheder</h2></div>',
          target: ["#qx-kea-text-621375"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Samarbejde og virksomheder</h2>',
          target: ["#qx-kea-text-621375 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-511093" class="qx-row ">',
          target: ["#qx-row-511093"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-61227" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-61227"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-element qx-element-kea-video  pd-bottom-sm">',
          target: [".qx-element-kea-video.pd-bottom-sm.qx-element"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-video-181421" class="row-flex">',
          target: ["#qx-kea-video-181421"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-video col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm">',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="embed-container" data-src="//www.youtube-nocookie.com/embed/LCoBLZm2tDw">',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="youtube-cookies">',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Videoen kunne ikke vises, fordi du ikke har accepteret funktionelle cookies. Indlæser du videoen, accepterer du at Youtube sætter cookies i din browser.</p>",
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos btn btn-primary">Indlæs video <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(2) > .load-videos.btn.btn-primary"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Ønsker du at indlæse videoer automatisk, kan du i stedet vælge at acceptere funktionelle cookies generelt.</p>",
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button></p>',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="load-videos accept-functional-cookies btn btn-primary">Accepter funktionelle cookies <i class="fa fa-refresh" aria-hidden="true"></i></button>',
          target: ["#qx-kea-video-181421 > .youtube-video.col-md-12.col-lg-12 > .embed-container > .youtube-cookies > p:nth-child(4) > .accept-functional-cookies.load-videos.btn"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-601229" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-601229"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-554231" class="row-flex qx-element qx-element-kea-presentation-box  pd-bottom-sm">',
          target: ["#qx-kea-presentation-box-554231"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/for-virksomheder/projektsamarbejde" title="Lav projekter med KEAs studerende">',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(1) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(1) > a > .image"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f24 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tLav projekter med KEAs studerende\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(1) > a > .f24.content-solid.base-color-1"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tLav projekter med KEAs studerende\t\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(1) > a > .f24.content-solid.base-color-1 > .title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/for-virksomheder/få-en-praktikant" title="Lav projekter med KEAs studerende">',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(2) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: ["#qx-kea-presentation-box-554231 > .col-md-12.col-lg-12.solid:nth-child(2) > a > .image"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f24 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tFå en praktikant fra KEA\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(2) > a > .f24.content-solid.base-color-1"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tFå en praktikant fra KEA\t\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(2) > a > .f24.content-solid.base-color-1 > .title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: [".col-md-12.col-lg-12.solid:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="/for-virksomheder/kea-karrieredage" title="Lav projekter med KEAs studerende">',
          target: [".col-md-12.col-lg-12.solid:nth-child(3) > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 16%; background-color: #fff;"></div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(3) > a > .image"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f24 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tKom til Karrieredage på KEA\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(3) > a > .f24.content-solid.base-color-1"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tKom til Karrieredage på KEA\t\t\t\t\t</div>',
          target: [".col-md-12.col-lg-12.solid:nth-child(3) > a > .f24.content-solid.base-color-1 > .title"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-59765" class="qx-row ">',
          target: ["#qx-row-59765"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-76767" class="qx-column  qx-col-lg-4 qx-col-md-4 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-76767"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-432227" class="qx-element qx-element-kea-text  pd-top-sm pd-right-sm pd-left-sm" style="background-color: #fff; padding-bottom: 14px;">',
          target: ["#qx-kea-text-432227"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h2>Skræddersyede virksomhedskurser</h2>",
          target: ["#qx-kea-text-432227 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Har din virksomhed brug for uddannelse af medarbejdere? Så&nbsp;kan du få lavet specialdesignede forløb og kurser, der tilgodeser jeres udfordringer og behov.</p>",
          target: ["#qx-kea-text-432227 > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><a class="page block" href="https://kompetence.kea.dk/virksomhedsydelser" onclick="saAutomatedLink(this, \'outbound\'); return false;">Læs mere om vores tilpassede kurser og forløb</a></p>',
          target: ["#qx-kea-text-432227 > p:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="page block" href="https://kompetence.kea.dk/virksomhedsydelser" onclick="saAutomatedLink(this, \'outbound\'); return false;">Læs mere om vores tilpassede kurser og forløb</a>',
          target: ["p:nth-child(3) > .page.block"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-831006" class="qx-column  qx-col-lg-8 qx-col-md-8 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-831006"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-671722" class="qx-element qx-element-kea-text  base-color-6 pd-top-md pd-bottom-lg pd-right-lg pd-left-lg mg-bottom-lg" style="background-color: #db334f;">',
          target: ["#qx-kea-text-671722"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="h4" style="text-align: center;">Vidste du at ...</p>',
          target: [".h4"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="h2" style="text-align: center;">På KEA møder design, teknologi og business hinanden. <br>Ikke mindst fordi verden udenfor efterspørger netop dén kombination.</p>',
          target: ["#qx-kea-text-671722 > .h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: [".h2 > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-59114" class="qx-section  qx-section--stretch">',
          target: ["#qx-section-59114"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-59114 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-24115" class="qx-row ">\n\n    <div id="qx-column-1116" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n<div id="qx-column-74118" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">\n  </div>\n<!-- qx-col -->\n    \n  </div>',
          target: ["#qx-row-24115"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-1116" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">\n  </div>',
          target: ["#qx-column-1116"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-74118" class="qx-column  qx-col-lg-6 qx-col-md-6 qx-col-sm-6 qx-col-xs-12">\n  </div>',
          target: ["#qx-column-74118"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-section-12117" class="qx-section negate-bottom-margin qx-section--stretch">',
          target: ["#qx-section-12117"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="qx-container">',
          target: ["#qx-section-12117 > .qx-container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-452830" class="qx-row ">',
          target: ["#qx-row-452830"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-142832" class="qx-column  qx-col-lg-12 qx-col-md-12 qx-col-sm-12 qx-col-xs-12">\n  <div id="qx-kea-text-732836" class="qx-element qx-element-kea-text  base-color-6 pd-top-md">\n<h2 style="opacity: 0.0;">Bliv en del af KEA Alumne</h2></div>\n</div>',
          target: ["#qx-column-142832"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-732836" class="qx-element qx-element-kea-text  base-color-6 pd-top-md">\n<h2 style="opacity: 0.0;">Bliv en del af KEA Alumne</h2></div>',
          target: ["#qx-kea-text-732836"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 style="opacity: 0.0;">Bliv en del af KEA Alumne</h2>',
          target: ["#qx-kea-text-732836 > h2"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-row-642118" class="qx-row ">',
          target: ["#qx-row-642118"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-512343" class="qx-column  qx-col-lg-4 qx-col-md-4 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-512343"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-presentation-box-963469" class="row-flex qx-element qx-element-kea-presentation-box  pd-top-sm pd-bottom-lg">',
          target: ["#qx-kea-presentation-box-963469"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-963469 > .col-md-12.col-lg-12.solid:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="https://www.linkedin.com/groups/12161757/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">',
          target: ['.col-md-12.col-lg-12.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['.col-md-12.col-lg-12.solid:nth-child(1) > a[rel="noopener noreferrer"][target="_blank"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f20 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tBliv en del af KEA Alumne (LinkedIn)\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['a[rel="noopener noreferrer"][target="_blank"] > .f20.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tBliv en del af KEA Alumne (LinkedIn)\t\t\t\t\t</div>',
          target: ['a[rel="noopener noreferrer"][target="_blank"] > .f20.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mg-bottom-sm solid">',
          target: ["#qx-kea-presentation-box-963469 > .col-md-12.col-lg-12.solid:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="" href="https://karriere.kea.dk/alumne" onclick="saAutomatedLink(this, \'outbound\'); return false;">',
          target: ['a[href$="alumne"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="image" style="padding-bottom: 20%; background-color: #fff;"></div>',
          target: ['a[href$="alumne"] > .image'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="content-solid f20 base-color-1">\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\tLæs mere om KEA Alumne\t\t\t\t\t</div>\n\t\t\t\t\t<div class="title-icon" aria-hidden="true">\n\t\t\t\t\t\t<i class="fa fa-fw kea-icon-arrow-right"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>',
          target: ['a[href$="alumne"] > .f20.content-solid.base-color-1'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="title">\n\t\t\t\t\t\tLæs mere om KEA Alumne\t\t\t\t\t</div>',
          target: ['a[href$="alumne"] > .f20.content-solid.base-color-1 > .title'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-column-722665" class="qx-column  qx-col-lg-8 qx-col-md-8 qx-col-sm-6 qx-col-xs-12">',
          target: ["#qx-column-722665"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="qx-kea-text-742671" class="qx-element qx-element-kea-text  base-color-6 pd-bottom-lg pd-right-md pd-left-md">',
          target: ["#qx-kea-text-742671"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<figure class="align-center">',
          target: ["figure"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<blockquote>KEA Alumne-netværket er et innovativt netværk med spændende oplæg og mulighed for at møde potentielle samarbejdspartnere og kollegaer eller blot følge med i, hvad der rører sig inden for dit fag.</blockquote>",
          target: ["blockquote"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<figcaption>Lene Døring, KEA-alumne</figcaption>",
          target: ["figcaption"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="container">',
          target: ["section > .container"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="row-flex">',
          target: [".container > .row-flex"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-6 col-md-3">',
          target: [".container > .row-flex > .col-sm-6.col-md-3.col-xs-12:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(1) > .moduletable:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">KEA - Københavns Erhvervsakademi</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(1) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="custom">',
          target: [".moduletable:nth-child(1) > .custom"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>Guldbergsgade 29N<br>2200 København N</p>",
          target: [".moduletable:nth-child(1) > .custom > p:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ["p:nth-child(1) > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><a href="mailto:kea@kea.dk">kea@kea.dk</a><br>+45 46 46 00 00</p>',
          target: [".moduletable:nth-child(1) > .custom > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="mailto:kea@kea.dk">kea@kea.dk</a>',
          target: ['a[href$="mailto:kea@kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: [".custom > p:nth-child(2) > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>CVR: 316 562 06<br>EAN: 5798 000 560 291</p>",
          target: [".custom > p:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ["p:nth-child(3) > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Rettelser til hjemmesiden:<br> <a href="mailto:webmaster@kea.dk">webmaster@kea.dk</a></p>',
          target: [".custom > p:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ["p:nth-child(4) > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="mailto:webmaster@kea.dk">webmaster@kea.dk</a>',
          target: ['a[href$="mailto:webmaster@kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<h5>Du skal ikke bare vide.<br>Du skal kunne.</h5>",
          target: ["h5"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<br>",
          target: ["h5 > br"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(1) > .moduletable:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="custom">',
          target: [".moduletable:nth-child(2) > .custom"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>",
          target: [".moduletable:nth-child(2) > .custom > p:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a title="Følg os på Facebook" href="https://www.facebook.com/kea.dk/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa fa-2x kea-icon-facebook"></i></a>',
          target: ['a[title="Følg os på Facebook"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa fa-2x kea-icon-facebook"></i>',
          target: [".kea-icon-facebook"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a title="Følg os på LinkedIn" href="https://www.linkedin.com/school/kea-k-benhavns-erhvervsakademi/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa fa-2x kea-icon-linkedin"></i></a>',
          target: ['a[title="Følg os på LinkedIn"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa fa-2x kea-icon-linkedin"></i>',
          target: [".kea-icon-linkedin"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a title="Følg os på Instagram" href="https://www.instagram.com/keacph/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa fa-2x kea-icon-instagram"></i></a>',
          target: ['a[title="Følg os på Instagram"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa fa-2x kea-icon-instagram"></i>',
          target: [".kea-icon-instagram"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a title="Følg os på Twitter" href="https://twitter.com/keacph/" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa fa-2x kea-icon-twitter"></i></a>',
          target: ['a[title="Følg os på Twitter"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa fa-2x kea-icon-twitter"></i>',
          target: [".kea-icon-twitter"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://www.youtube.com/user/KEAkanal" onclick="saAutomatedLink(this, \'outbound\'); return false;"><i class="fa fa-2x kea-icon-youtube"></i></a>',
          target: ["a:nth-child(5)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<i class="fa fa-2x kea-icon-youtube"></i>',
          target: [".kea-icon-youtube"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: "<p>",
          target: [".moduletable:nth-child(2) > .custom > p:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a title="Find vores podcasts på Podbean" href="https://www.podbean.com/podcast-network/keacph" target="_blank" rel="noopener" onclick="saAutomatedLink(this, \'outbound\');">',
          target: ['a[title="Find vores podcasts på Podbean"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img style="width: 150px; height: 56px; border: none;" src="/images/resources/podbean.png" alt="Find vores podcasts på Podbean">',
          target: ['img[src$="podbean.png"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-6 col-md-3">',
          target: [".container > .row-flex > .col-sm-6.col-md-3.col-xs-12:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Om os</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(1) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-247"><a href="/om-kea/organisation">Organisation</a></li>',
          target: [".item-247"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/organisation">Organisation</a>',
          target: ['.item-247 > a[href$="organisation"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-258"><a href="/årsrapporter">Årsrapporter</a></li>',
          target: [".item-258"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/årsrapporter">Årsrapporter</a>',
          target: ['a[href$="årsrapporter"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-259"><a href="/keas-vedtægter">KEAs vedtægter</a></li>',
          target: [".item-259"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/keas-vedtægter">KEAs vedtægter</a>',
          target: ['a[href$="keas-vedtægter"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-260"><a href="https://kea.dk/om-kea/strategi" onclick="saAutomatedLink(this, \'outbound\'); return false;">Strategi</a></li>',
          target: [".item-260"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.dk/om-kea/strategi" onclick="saAutomatedLink(this, \'outbound\'); return false;">Strategi</a>',
          target: ['.item-260 > a[href$="strategi"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-811"><a href="/strategisk-rammekontrakt">Strategisk rammekontrakt</a></li>',
          target: [".item-811"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/strategisk-rammekontrakt">Strategisk rammekontrakt</a>',
          target: ['a[href$="strategisk-rammekontrakt"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-304"><a href="/retningslinjer-for-uddannelser-til-internationale-studerende">Internationale retningslinjer</a></li>',
          target: [".item-304"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/retningslinjer-for-uddannelser-til-internationale-studerende">Internationale retningslinjer</a>',
          target: [".item-304 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-248"><a href="https://kea.career.emply.com/da/ledige-stillinger" onclick="saAutomatedLink(this, \'outbound\'); return false;">Ledige stillinger</a></li>',
          target: [".item-248"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.career.emply.com/da/ledige-stillinger" onclick="saAutomatedLink(this, \'outbound\'); return false;">Ledige stillinger</a>',
          target: [".item-248 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1029"><a href="/årets-underviser">Årets Underviser</a></li>',
          target: [".item-1029"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/årets-underviser">Årets Underviser</a>',
          target: ['a[href$="årets-underviser"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1032"><a href="/årets-kea-praktik">Årets KEA-praktik</a></li>',
          target: [".item-1032"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/årets-kea-praktik">Årets KEA-praktik</a>',
          target: ['a[href$="årets-kea-praktik"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For virksomheder</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(2) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-250"><a href="/for-virksomheder/få-en-praktikant">Få en praktikant</a></li>',
          target: [".item-250"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/for-virksomheder/få-en-praktikant">Få en praktikant</a>',
          target: [".item-250 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1003"><a href="/learning-lab">Learning Lab</a></li>',
          target: [".item-1003"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/learning-lab">Learning Lab</a>',
          target: ['a[href$="learning-lab"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-251"><a href="/for-virksomheder/projektsamarbejde">Projektsamarbejde</a></li>',
          target: [".item-251"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/for-virksomheder/projektsamarbejde">Projektsamarbejde</a>',
          target: [".item-251 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-252"><a href="http://jobportal.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Jobportal</a></li>',
          target: [".item-252"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://jobportal.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Jobportal</a>',
          target: ['a[href$="jobportal.kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">\n\n\t\t\t\t\t<h2 class="h3">For censorer</h2>\n\t\t\n\t\t\t<ul class="nav menu mod-list">\n<li class="item-512"><a href="/censor">Information til censorer</a></li><li class="item-513"><a href="/censor">Information til fagkonsulenter</a></li></ul>\n\n\t\t</div>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For censorer</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">\n<li class="item-512"><a href="/censor">Information til censorer</a></li><li class="item-513"><a href="/censor">Information til fagkonsulenter</a></li></ul>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(2) > .moduletable:nth-child(3) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-512"><a href="/censor">Information til censorer</a></li>',
          target: [".item-512"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/censor">Information til censorer</a>',
          target: ['.item-512 > a[href$="censor"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-513"><a href="/censor">Information til fagkonsulenter</a></li>',
          target: [".item-513"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/censor">Information til fagkonsulenter</a>',
          target: ['.item-513 > a[href$="censor"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-6 col-md-3">',
          target: [".container > .row-flex > .col-sm-6.col-md-3.col-xs-12:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For studerende</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(1) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-310"><a href="http://bibliotek.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a></li>',
          target: [".item-310"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://bibliotek.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a>',
          target: ['a[href$="bibliotek.kea.dk"][rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-514"><a href="https://mit.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Mit.kea.dk (intranet)</a></li>',
          target: [".item-514"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://mit.kea.dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Mit.kea.dk (intranet)</a>',
          target: ['a[href$="mit.kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-312"><a href="https://kea-fronter.itslearning.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Fronter</a></li>',
          target: [".item-312"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea-fronter.itslearning.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Fronter</a>',
          target: ['.item-312 > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-467"><a href="https://outlook.office.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA webmail</a></li>',
          target: [".item-467"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://outlook.office.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA webmail</a>',
          target: ['a[href$="outlook.office.com/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-267"><a href="/iværksætteri">Iværksætteri</a></li>',
          target: [".item-267"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/iværksætteri">Iværksætteri</a>',
          target: ['a[href$="iværksætteri"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-268"><a href="https://mit.kea.dk/praktik" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Praktik (på mit.kea.dk)</a></li>',
          target: [".item-268"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://mit.kea.dk/praktik" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Praktik (på mit.kea.dk)</a>',
          target: ['a[href$="praktik"][rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-265"><a href="/uddannelser/studieaktivitetsmodel">Studieaktivitetsmodel</a></li>',
          target: [".item-265"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/uddannelser/studieaktivitetsmodel">Studieaktivitetsmodel</a>',
          target: [".item-265 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-302"><a href="/ordensregler">Ordensregler</a></li>',
          target: [".item-302"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/ordensregler">Ordensregler</a>',
          target: ['.item-302 > a[href$="ordensregler"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For alumner</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(2) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1011"><a href="/for-alumner">KEA Alumne</a></li>',
          target: [".item-1011"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/for-alumner">KEA Alumne</a>',
          target: ['.item-1011 > a[href$="for-alumner"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1012"><a href="https://kea.dk/for-alumner#qx-kea-text-981276" onclick="saAutomatedLink(this, \'outbound\'); return false;">Adgang til labs og bibliotek</a></li>',
          target: [".item-1012"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.dk/for-alumner#qx-kea-text-981276" onclick="saAutomatedLink(this, \'outbound\'); return false;">Adgang til labs og bibliotek</a>',
          target: [".item-1012 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1014"><a href="https://kea.dk/for-alumner#qx-kea-text-911459" onclick="saAutomatedLink(this, \'outbound\'); return false;">Månedens alumne</a></li>',
          target: [".item-1014"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.dk/for-alumner#qx-kea-text-911459" onclick="saAutomatedLink(this, \'outbound\'); return false;">Månedens alumne</a>',
          target: [".item-1014 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1015"><a href="https://kea.dk/for-alumner#qx-kea-joomla-module-5813" onclick="saAutomatedLink(this, \'outbound\'); return false;">Arrangementer for alumner</a></li>',
          target: [".item-1015"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.dk/for-alumner#qx-kea-joomla-module-5813" onclick="saAutomatedLink(this, \'outbound\'); return false;">Arrangementer for alumner</a>',
          target: [".item-1015 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">For ansatte</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(3) > .moduletable:nth-child(3) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-313"><a href="https://bibliotek.kea.dk/da/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a></li>',
          target: [".item-313"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://bibliotek.kea.dk/da/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a>',
          target: ['.item-313 > a[href$="da/"][rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-314"><a href="https://kea-fronter.itslearning.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Fronter</a></li>',
          target: [".item-314"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea-fronter.itslearning.com/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Fronter</a>',
          target: ['.item-314 > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-315"><a href="https://outlook.office.com" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA webmail</a></li>',
          target: [".item-315"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://outlook.office.com" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA webmail</a>',
          target: ['a[href$="outlook.office.com"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="col-xs-12 col-sm-6 col-md-3">',
          target: [".container > .row-flex > .col-sm-6.col-md-3.col-xs-12:nth-child(4)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(1)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Praktisk info</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(1) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(1) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-253"><a href="/cookies">Cookies</a></li>',
          target: [".item-253"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/cookies">Cookies</a>',
          target: ['a[href$="cookies"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-340"><a href="/persondatapolitik">Persondatapolitik</a></li>',
          target: [".item-340"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/persondatapolitik">Persondatapolitik</a>',
          target: ['a[href$="persondatapolitik"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-746"><a href="https://www.was.digst.dk/kea-dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Tilgængelighedserklæring</a></li>',
          target: [".item-746"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://www.was.digst.dk/kea-dk" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Tilgængelighedserklæring</a>',
          target: ['.item-746 > a[rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-301"><a href="/ordensregler">Ordensregler</a></li>',
          target: [".item-301"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/ordensregler">Ordensregler</a>',
          target: ['.item-301 > a[href$="ordensregler"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-254"><a href="/fakturering">Fakturering</a></li>',
          target: [".item-254"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/fakturering">Fakturering</a>',
          target: ['a[href$="fakturering"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-257"><a href="/indkøbspolitik">Indkøbspolitik</a></li>',
          target: [".item-257"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/indkøbspolitik">Indkøbspolitik</a>',
          target: ['a[href$="indkøbspolitik"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-338"><a href="/udbud">Udbud på KEA</a></li>',
          target: [".item-338"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/udbud">Udbud på KEA</a>',
          target: ['a[href$="udbud"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-1002"><a href="/instruktion-til-håndværkere-og-leverandører">Instruktion til håndværkere og leverandører</a></li>',
          target: [".item-1002"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/instruktion-til-håndværkere-og-leverandører">Instruktion til håndværkere og leverandører</a>',
          target: [".item-1002 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-255"><a href="/om-kea/find-vej">Find vej</a></li>',
          target: [".item-255"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/find-vej">Find vej</a>',
          target: ['.item-255 > a[href$="find-vej"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-640"><a href="/handlingsplaner">Handlingsplaner</a></li>',
          target: [".item-640"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/handlingsplaner">Handlingsplaner</a>',
          target: ['a[href$="handlingsplaner"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(2)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Kontakt</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(2) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(2) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-240"><a href="/om-kea/nyheder-og-presse/presse">Presse</a></li>',
          target: [".item-240"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/om-kea/nyheder-og-presse/presse">Presse</a>',
          target: [".item-240 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-243"><a href="/uddannelser/kontakt">Studievejledning</a></li>',
          target: [".item-243"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/uddannelser/kontakt">Studievejledning</a>',
          target: ['.item-243 > a[href$="kontakt"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-317"><a href="https://kea.dk/uddannelser/ansøgning-optagelse#qx-kea-text-3318" onclick="saAutomatedLink(this, \'outbound\'); return false;">KEA Optag</a></li>',
          target: [".item-317"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://kea.dk/uddannelser/ansøgning-optagelse#qx-kea-text-3318" onclick="saAutomatedLink(this, \'outbound\'); return false;">KEA Optag</a>',
          target: [".item-317 > a"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="moduletable">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(3)"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="h3">Genveje</h2>',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(3) > .h3"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu mod-list">',
          target: [".col-sm-6.col-md-3.col-xs-12:nth-child(4) > .moduletable:nth-child(3) > .mod-list.nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-249"><a href="http://bibliotek.kea.dk/da/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a></li>',
          target: [".item-249"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="http://bibliotek.kea.dk/da/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">KEA Bibliotek</a>',
          target: ['.item-249 > a[href$="da/"][rel="noopener noreferrer"][target="_blank"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-316"><a href="https://global.kea.dk/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Go Global!</a></li>',
          target: [".item-316"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://global.kea.dk/" target="_blank" rel="noopener noreferrer" onclick="saAutomatedLink(this, \'outbound\');">Go Global!</a>',
          target: ['a[href$="global.kea.dk/"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li class="item-632"><a href="https://it.kea.dk" onclick="saAutomatedLink(this, \'outbound\'); return false;">it.kea.dk</a></li>',
          target: [".item-632"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="https://it.kea.dk" onclick="saAutomatedLink(this, \'outbound\'); return false;">it.kea.dk</a>',
          target: ['.item-632 > a[href$="it.kea.dk"]'],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav id="anchor-menu" class="anchor-disabled">',
          target: ["#anchor-menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="nav menu"></ul>',
          target: ["#anchor-menu > .nav.menu"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="cookie-manager-cta"><button title="Administrer cookie-indstillinger" class="fa fa-lg kea-icon-cookie"></button></div>',
          target: [".cookie-manager-cta"],
        },
        {
          any: [
            {
              id: "region",
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: "moderate",
              message: "All page content is contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button title="Administrer cookie-indstillinger" class="fa fa-lg kea-icon-cookie"></button>',
          target: [".fa-lg"],
        },
      ],
    },
    {
      id: "tabindex",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures tabindex attribute values are not greater than 0",
      help: "Elements should not have tabindex greater than zero",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/tabindex?application=axe-puppeteer",
      nodes: [
        {
          any: [
            {
              id: "tabindex",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "Element does not have a tabindex greater than 0",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<main class="container" tabindex="-1" id="maincontent">',
          target: ["#maincontent"],
        },
      ],
    },
  ],
  incomplete: [],
  inapplicable: [
    {
      id: "accesskeys",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures every accesskey attribute value is unique",
      help: "accesskey attribute value should be unique",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/accesskeys?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-allowed-role",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures role attribute has an appropriate value for the element",
      help: "ARIA role should be appropriate for the element",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-allowed-role?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-dialog-name",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
      help: "ARIA dialog and alertdialog nodes should have an accessible name",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-dialog-name?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-text",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: 'Ensures role="text" is used on elements with no focusable descendants',
      help: '"role=text" should have no focusable descendants',
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-text?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "aria-treeitem-name",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description: "Ensures every ARIA treeitem node has an accessible name",
      help: "ARIA treeitem nodes should have an accessible name",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/aria-treeitem-name?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "autocomplete-valid",
      impact: null,
      tags: ["cat.forms", "wcag21aa", "wcag135", "EN-301-549", "EN-9.1.3.5", "ACT"],
      description: "Ensure the autocomplete attribute is correct and suitable for the form field",
      help: "autocomplete attribute must be used correctly",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/autocomplete-valid?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "empty-table-header",
      impact: null,
      tags: ["cat.name-role-value", "best-practice"],
      description: "Ensures table headers have discernible text",
      help: "Table header text should not be empty",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/empty-table-header?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "frame-tested",
      impact: null,
      tags: ["cat.structure", "best-practice", "review-item"],
      description: "Ensures <iframe> and <frame> elements contain the axe-core script",
      help: "Frames should be tested with axe-core",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/frame-tested?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-banner-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the banner landmark is at top level",
      help: "Banner landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-banner-is-top-level?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-complementary-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the complementary landmark or aside is at top level",
      help: "Aside should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-complementary-is-top-level?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-contentinfo-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the contentinfo landmark is at top level",
      help: "Contentinfo landmark should not be contained in another landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-contentinfo-is-top-level?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-banner",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one banner landmark",
      help: "Document should not have more than one banner landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-banner?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-contentinfo",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one contentinfo landmark",
      help: "Document should not have more than one contentinfo landmark",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/landmark-no-duplicate-contentinfo?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "scope-attr-valid",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description: "Ensures the scope attribute is used correctly on tables",
      help: "scope attribute should be used correctly",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/scope-attr-valid?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "skip-link",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensure all skip links have a focusable target",
      help: "The skip-link target should exist and be focusable",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/skip-link?application=axe-puppeteer",
      nodes: [],
    },
    {
      id: "table-duplicate-name",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description: "Ensure the <caption> element does not contain the same text as the summary attribute",
      help: "tables should not have the same summary and caption",
      helpUrl: "https://dequeuniversity.com/rules/axe/4.9/table-duplicate-name?application=axe-puppeteer",
      nodes: [],
    },
  ],
};
