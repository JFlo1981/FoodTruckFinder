import React from "react";
import { Box, Flex, useColorModeValue, chakra } from "@chakra-ui/react";

export default function SplitWithImageTerms() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Box mt={2}>
          <chakra.h1
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            Terms & Conditions
          </chakra.h1>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Certain features of the Site may be subject to additional
            guidelines, terms, or rules, which will be posted on the Site in
            connection with such features. <br></br>
            <br></br>
            Copyright/Trademark Information. Copyright Â©. All rights reserved.
            All trademarks, logos and service marks displayed on the Site are
            our property or the property of other third-parties. You are not
            permitted to use these Marks without our prior written consent or
            the consent of such third party which may own the Marks.<br></br>
            <br></br>
            Company reserves the right to change, suspend, or cease the Site
            with or without notice to you. You approved that Company will not be
            held liable to you or any third-party for any change, interruption,
            or termination of the Site or any part.<br></br>
            <br></br>
            No Support or Maintenance. You agree that Company will have no
            obligation to provide you with any support in connection with the
            Site.<br></br>
            <br></br>
            Third-Party Links & Ads. The Site may contain links to third-party
            websites and services, and/or display advertisements for
            third-parties. Such Third-Party Links & Ads are not under the
            control of Company, and Company is not responsible for any
            Third-Party Links & Ads. Company provides access to these
            Third-Party Links & Ads only as a convenience to you, and does not
            review, approve, monitor, endorse, warrant, or make any
            representations with respect to Third-Party Links & Ads. You use all
            Third-Party Links & Ads at your own risk, and should apply a
            suitable level of caution and discretion in doing so. When you click
            on any of the Third-Party Links & Ads, the applicable third
            partyâ€™s terms and policies apply, including the third partyâ€™s
            privacy and data gathering practices.<br></br>
            <br></br>
            Other Users. Each Site user is solely responsible for any and all of
            its own User Content. Because we do not control User Content, you
            acknowledge and agree that we are not responsible for any User
            Content, whether provided by you or by others. You agree that
            Company will not be responsible for any loss or damage incurred as
            the result of any such interactions. If there is a dispute between
            you and any Site user, we are under no obligation to become
            involved.<br></br>
            <br></br>
            To the maximum extent permitted by law, in no event shall company or
            our suppliers be liable to you or any third-party for any lost
            profits, lost data, costs of procurement of substitute products, or
            any indirect, consequential, exemplary, incidental, special or
            punitive damages arising from or relating to these terms or your use
            of, or incapability to use the site even if company has been advised
            of the possibility of such damages. Access to and use of the site is
            at your own discretion and risk, and you will be solely responsible
            for any damage to your device or computer system, or loss of data
            resulting therefrom.<br></br>
            <br></br>
            Term and Termination. Subject to this Section, these Terms will
            remain in full force and effect while you use the Site. We may
            suspend or terminate your rights to use the Site at any time for any
            reason at our sole discretion, including for any use of the Site in
            violation of these Terms. Upon termination of your rights under
            these Terms, your Account and right to access and use the Site will
            terminate immediately. You understand that any termination of your
            Account may involve deletion of your User Content associated with
            your Account from our live databases. Company will not have any
            liability whatsoever to you for any termination of your rights under
            these Terms. <br></br>
            <br></br>
            Company respects the intellectual property of others and asks that
            users of our Site do the same. In connection with our Site, we have
            adopted and implemented a policy respecting copyright law that
            provides for the removal of any infringing materials and for the
            termination of users of our online Site who are repeated infringers
            of intellectual property rights, including copyrights. If you
            believe that one of our users is, through the use of our Site,
            unlawfully infringing the copyright(s) in a work, and wish to have
            the allegedly infringing material removed, notification must be
            provided to our designated Copyright Agent<br></br>
            <br></br>
            <br></br>
            <br></br>
            Copyright 2022 Food Truck Finder Permission is hereby granted, free
            of charge, to any person obtaining a copy of this software and
            associated documentation files (the "Software"), to deal in the
            Software without restriction, including without limitation the
            rights to use, copy, modify, merge, publish, distribute, sublicense,
            and/or sell copies of the Software, and to permit persons to whom
            the Software is furnished to do so, subject to the following
            conditions: The above copyright notice and this permission notice
            shall be included in all copies or substantial portions of the
            Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
            KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}
