const woahFlowers = [
    {
        name: "Rose",
        cost: 18.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780743273565_p0_v14_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
          "Roses are erect, climbing, or trailing shrubs, the stems of which are usually copiously armed with prickles of various shapes and sizes, commonly called thorns. The leaves are alternate and pinnately compound (i.e., feather-formed), usually with oval leaflets that are sharply toothed. The flowers of wild roses usually have five petals, whereas the flowers of cultivated roses are often double (i.e., with multiple sets of petals).",
      },
      {
        name: "Carnation",
        cost: 9.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780063278547_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        blurb:
        "Carnations are among the most popular commercial cut flowers, being used in floral arrangements, corsages, and boutonnieres. In 1907 Anna Jarvis of Philadelphia selected the pink carnation as the symbol for Mother’s Day. In Europe the carnation was formerly used as a treatment for fevers. It was also used to spice wine and ale during Elizabethan times, as a substitute for the more expensive clove.",
      },
      {
        name: "Orchid",
        cost: 13.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781982110994_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
        "As a group, the orchids are different from other plants but only in the morphological (structural) characteristics associated with the flower and its organization. Even the special characteristics of orchid flowers, such as the masses of pollen called pollinia, the joining of the stamens and pistil to form a column, and the tiny seeds without endosperm are found individually in other groups of flowering plants.",
      },
      {
        name: "Tulip",
        cost: 12.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780375842207_p0_v12_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
"The tulip produces two or three thick bluish green leaves that are clustered at the base of the plant. The usually solitary bell-shaped flowers have three petals and three sepals. There are six free stamens, and the three-lobed ovary is terminated by a sessile three-lobed stigma. The fruit is a capsule with many seeds. Many garden tulips can be propagated only by their scaly bulbs.",
      },
      {
        name: "Dahlia",
        cost: 11.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781449474256_p0_v11_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
"Dahlias are tuberous perennials, and most have simple leaves that are segmented and toothed or cut. The compound flowers may be white, yellow, red, or purple in colour. Wild species of dahlias have both disk and ray flowers in the flowering heads, but many varieties of ornamentals such as the common garden dahlia (D. bipinnata) have shortened ray flowers.",
      },
      {
        name: "Lily",
        cost: 25.0,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781435167179_p1_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        blurb: "The true lilies are erect perennial plants with leafy stems, scaly bulbs, usually narrow leaves, and solitary or clustered flowers. The flowers consist of six petal-like segments, which may form the shape of a trumpet, with a more or less elongated tube, as in the Madonna lily (Lilium candidum) and Easter lily (L. longiflorum).",
      },
      {
        name: "Sunflower",
        cost: 14.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780142001745_p0_v9_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
"The disk flowers are brown, yellow, or purple, while the petallike ray flowers are yellow. The fruit is a single-seeded achene. Oilseed varieties typically have small black achenes, while those grown for direct seed consumption, known as confection varieties, have larger black-and-white achenes that readily separate from the seed within.",
      },
      {
        name: "Marigold",
        cost: 14.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062060624_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D",
        blurb:
"Members of the genus Tagetes have attractive yellow, orange, or red composite flowers that are solitary on the stems or clustered. The leaves are arranged opposite each other on the stem and are usually finely cut. Characteristic bracts (leaflike structures) form a cup-shaped base below each flower head.",
      },
      {
        name: "Buttercup",
        cost: 10.99,
        image:
          "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781728205489_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        blurb:
"Most buttercups have tuberous or fibrous roots. The flowers are solitary or loosely clustered and have five green sepals, five to many glossy yellow (sometimes white) petals, and numerous male and female structures (stamens and pistils). Cultivated varieties have been bred in many colours. The leaves are highly variable, depending on the species.",
      },
      {
        name: "Hydrangea",
        cost: 12.99,
        image:
          "https://prodimage.images-bn.com/pimages/9781646511129_p0_v2_s600x595.jpg",
        blurb:
"Hills-of-snow, or wild hydrangea (H. arborescens), a shrub slightly more than 1 metre (4 feet) tall, has rounded clusters of white flowers. The French hydrangea, or hortensia (H. macrophylla), is widely cultivated in many varieties for its large globular flower clusters in colours of rose, lavender, blue, and, rarely, white.",
      },
      {
        name: "Daisy",
        cost: 7.58,
        image: "https://m.media-amazon.com/images/I/51ZnBH4OxpL.jpg",
        blurb:
"The plant has leafless flower stalks and hairy bracts (leaflike structures) below the flower heads. Some varieties of the English daisy have double flowers; others may have pink or red ray flowers surrounding the bright yellow disk.",
      },
    ]

    export {woahFlowers};