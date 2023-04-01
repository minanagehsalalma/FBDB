import { createReadStream } from "fs";
import { mapSync, split } from "event-stream";
import mongoose from "mongoose";
import usersModel from "./users.model";

// Your db connection string here
const dbUri = "mongodb://localhost:27017";
let counter = 0;

const storeFile = async (path: string) => {
  const s = createReadStream("./txt/" + path)
    .pipe(split())
    .pipe(
      mapSync(async (line: string) => {
        s.pause();

        if (line.startsWith("$HEX["))
          line = Buffer.from(
            line.replace("$HEX[", "").replace("]", ""),
            "hex"
          ).toString();

        let fields = line.split(",");
        fields = fields.map((x) => x.replaceAll('"', ""));

        const [
          uid,
          ,
          ,
          tel,
          ,
          ,
          first_name,
          last_name,
          gender,
          ,
          ,
          username,
          ,
          ,
          works_at,
          ,
          from,
          lives_in,
          studied_at,
          ,
          ,
          ,
          ,
          ,
          ,
          relationship_status,
        ] = fields;

        const user = {
          _id: tel,
          uid,
          username,
          first_name,
          last_name,
          gender,
          works_at,
          studied_at,
          lives_in,
          from,
          relationship_status,
        };

        if (!uid || !tel) {
          s.resume();
          return;
        }

        await usersModel
          .create(user)
          .then(() =>
            console.log(
              `[✔] [${counter++}] - Adding user with id: ${user._id}.`
            )
          )
          .catch((err) => {
            if (err.code == 11000) console.log(`[✖] - User Already Exists.`);
            else console.log(err);
          })
          .finally(() => s.resume());
      })
    )
    .on("", () => {})
    .on("error", function (err) {
      console.log("Error while reading file.", err);
    })
    .on("end", function () {
      console.log("Read entire file.");
    });
};

const init = async () => {
  // Array of file paths
  const filePaths = [
    "EG0437",
    "EG0438",
    "EG0439",
    "EG0440",
    "EG0441",
    "EG0442",
    "EG0443",
    "EG0444",
    "EG0445",
    "EG0446",
    "EG0447",
    "EG0448",
    "EG0449",
    "EG0450",
    "EG0451",
    "EG0452",
    "EG0453",
    "EG0454",
    "EG0455",
    "EG0456",
    "EG0457",
    "EG0458",
    "EG0459",
    "EG0460",
    "EG0461",
    "EG0462",
    "EG0463",
    "EG0464",
    "EG0465",
    "EG0466",
    "EG0467",
    "EG0468",
    "EG0469",
    "EG0470",
    "EG0471",
    "EG0472",
    "EG0473",
    "EG0474",
    "EG0475",
    "EG0476",
    "EG0477",
    "EG0478",
    "EG0479",
    "EG0480",
    "EG0481",
    "EG0482",
    "EG0483",
    "EG0484",
    "EG0485",
    "EG0486",
    "EG0487",
    "EG0488",
    "EG0489",
    "EG0490",
    "EG0491",
    "EG0492",
    "EG0493",
    "EG0494",
    "EG0495",
    "EG0496",
    "EG0497",
    "EG0498",
    "EG0499",
    "EG0500",
    "EG0501",
    "EG0502",
    "EG0503",
    "EG0504",
    "EG0505",
    "EG0506",
    "EG0507",
    "EG0508",
    "EG0509",
    "EG0510",
    "EG0511",
    "EG0512",
    "EG0513",
    "EG0514",
    "EG0515",
    "EG0516",
    "EG0517",
    "EG0518",
    "EG0519",
    "EG0520",
    "EG0521",
    "EG0522",
    "EG0523",
    "EG0524",
    "EG0525",
    "EG0526",
    "EG0527",
    "EG0528",
    "EG0529",
    "EG0530",
    "EG0531",
    "EG0532",
    "EG0533",
    "EG0534",
    "EG0535",
    "EG0536",
    "EG0537",
    "EG0538",
    "EG0539",
    "EG0540",
    "EG0541",
    "EG0542",
    "EG0543",
    "EG0544",
    "EG0545",
    "EG0546",
    "EG0547",
    "EG0548",
    "EG0549",
    "EG0550",
    "EG0551",
    "EG0552",
    "EG0553",
    "EG0554",
    "EG0555",
    "EG0556",
    "EG0557",
    "EG0558",
    "EG0559",
    "EG0560",
    "EG0561",
    "EG0562",
    "EG0563",
    "EG0564",
    "EG0565",
    "EG0566",
    "EG0567",
    "EG0568",
    "EG0569",
    "EG0570",
    "EG0571",
    "EG0572",
    "EG0573",
    "EG0574",
    "EG0575",
    "EG0576",
    "EG0577",
    "EG0578",
    "EG0579",
    "EG0580",
    "EG0581",
    "EG0582",
    "EG0583",
    "EG0584",
    "EG0585",
    "EG0586",
    "EG0587",
    "EG0588",
    "EG0589",
    "EG0590",
    "EG0591",
    "EG0592",
    "EG0593",
    "EG0594",
    "EG0595",
    "EG0596",
    "EG0597",
    "EG0598",
    "EG0599",
    "EG0600",
    "EG0601",
    "EG0602",
    "EG0603",
    "EG0604",
    "EG0605",
    "EG0606",
    "EG0607",
    "EG0608",
    "EG0609",
    "EG0610",
    "EG0611",
    "EG0612",
    "EG0613",
    "EG0614",
    "EG0615",
    "EG0616",
    "EG0617",
    "EG0618",
    "EG0619",
    "EG0620",
    "EG0621",
    "EG0622",
    "EG0623",
    "EG0624",
    "EG0625",
    "EG0626",
    "EG0627",
    "EG0628",
    "EG0629",
    "EG0630",
    "EG0631",
    "EG0632",
    "EG0633",
    "EG0634",
    "EG0635",
    "EG0636",
    "EG0637",
    "EG0638",
    "EG0639",
    "EG0640",
    "EG0641",
    "EG0642",
    "EG0643",
    "EG0644",
    "EG0645",
    "EG0646",
    "EG0647",
    "EG0648",
    "EG0649",
    "EG0650",
    "EG0651",
    "EG0652",
    "EG0653",
    "EG0654",
    "EG0655",
    "EG0656",
    "EG0657",
    "EG0658",
    "EG0659",
    "EG0660",
    "EG0661",
    "EG0662",
    "EG0663",
    "EG0664",
    "EG0665",
    "EG0666",
    "EG0667",
    "EG0668",
    "EG0669",
    "EG0670",
    "EG0671",
    "EG0672",
    "EG0673",
    "EG0674",
    "EG0675",
    "EG0676",
    "EG0677",
    "EG0678",
    "EG0679",
    "EG0680",
    "EG0681",
    "EG0682",
    "EG0683",
    "EG0684",
    "EG0685",
    "EG0686",
    "EG0687",
    "EG0688",
    "EG0689",
    "EG0690",
    "EG0691",
    "EG0692",
    "EG0693",
    "EG0694",
    "EG0695",
    "EG0696",
    "EG0697",
    "EG0698",
    "EG0699",
    "EG0700",
    "EG0701",
    "EG0702",
    "EG0703",
    "EG0704",
    "EG0705",
    "EG0706",
    "EG0707",
    "EG0708",
    "EG0709",
    "EG0710",
    "EG0711",
    "EG0712",
    "EG0713",
    "EG0714",
    "EG0715",
    "EG0716",
    "EG0717",
    "EG0718",
    "EG0719",
    "EG0720",
    "EG0721",
    "EG0722",
    "EG0723",
    "EG0724",
    "EG0725",
    "EG0726",
    "EG0727",
    "EG0728",
    "EG0729",
    "EG0730",
    "EG0731",
    "EG0732",
    "EG0733",
    "EG0734",
    "EG0735",
    "EG0736",
    "EG0737",
    "EG0738",
    "EG0739",
    "EG0740",
    "EG0741",
    "EG0742",
    "EG0743",
    "EG0744",
    "EG0745",
    "EG0746",
    "EG0747",
    "EG0748",
    "EG0749",
    "EG0750",
    "EG0751",
    "EG0752",
    "EG0753",
    "EG0754",
    "EG0755",
    "EG0756",
    "EG0757",
    "EG0758",
    "EG0759",
    "EG0760",
    "EG0761",
    "EG0762",
    "EG0763",
    "EG0764",
    "EG0765",
    "EG0766",
    "EG0767",
    "EG0768",
    "EG0769",
    "EG0770",
    "EG0771",
    "EG0772",
    "EG0773",
    "EG0774",
    "EG0775",
    "EG0776",
    "EG0777",
    "EG0778",
    "EG0779",
    "EG0780",
    "EG0781",
    "EG0782",
    "EG0783",
    "EG0784",
    "EG0785",
    "EG0786",
    "EG0787",
    "EG0788",
    "EG0789",
    "EG0790",
    "EG0791",
    "EG0792",
    "EG0793",
    "EG0794",
    "EG0795",
    "EG0796",
    "EG0797",
    "EG0798",
    "EG0799",
    "EG0800",
    "EG0801",
    "EG0802",
    "EG0803",
    "EG0804",
    "EG0805",
    "EG0806",
    "EG0807",
    "EG0808",
    "EG0809",
    "EG0810",
    "EG0811",
    "EG0812",
    "EG0813",
    "EG0814",
    "EG0815",
    "EG0816",
    "EG0817",
    "EG0818",
    "EG0819",
    "EG0820",
    "EG0821",
    "EG0822",
    "EG0823",
    "EG0824",
    "EG0825",
    "EG0826",
    "EG0827",
    "EG0828",
    "EG0829",
    "EG0830",
    "EG0831",
    "EG0832",
    "EG0833",
    "EG0834",
    "EG0835",
    "EG0836",
    "EG0837",
    "EG0838",
    "EG0839",
    "EG0840",
    "EG0841",
    "EG0842",
    "EG0843",
    "EG0844",
    "EG0845",
    "EG0846",
    "EG0847",
    "EG0848",
    "EG0849",
    "EG0850",
    "EG0851",
    "EG0852",
    "EG0853",
    "EG0854",
    "EG0855",
    "EG0856",
    "EG0857",
    "EG0858",
    "EG0859",
    "EG0860",
    "EG0861",
    "EG0862",
    "EG0863",
    "EG0864",
    "EG0865",
    "EG0866",
    "EG0867",
    "EG0868",
    "EG0869",
    "EG0870",
    "EG0871",
    "EG0872",
    "EG0873",
    "EG0874",
    "EG0875",
    "EG0876",
    "EG0877",
    "EG0878",
    "EG0879",
    "EG0880",
    "EG0881",
    "EG0882",
    "EG0883",
    "EG0884",
    "EG0885",
    "EG0886",
    "EG0887",
    "EG0888",
    "EG0889",
    "EG0890",
    "EG0891",
    "EG0892",
    "EG0893",
    "EG0894",
    "EG0895",
    "EG0896",
    "EG0897",
    "EG0898",
    "EG0899",
    "EG0900",
    "EG0901",
    "EG0902",
    "EG0903"
  ];

  mongoose.connect(dbUri).then(() => {
    console.log("DB Connected");
    filePaths.forEach((path) => storeFile(path));
  });
};

init();
